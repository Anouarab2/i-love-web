import express, { response } from 'express'

import { Liquid } from 'liquidjs';

import { readdir, readFile } from 'node:fs/promises'

import { marked } from 'marked'

const files = await readdir('content')

console.log(files)

const app = express()

app.use(express.static('public'))

const engine = new Liquid();
app.engine('liquid', engine.express()); 

app.set('views', './views')

app.get('/', async function(req, res) {
    res.render('index.liquid')
})

app.get('/journal', async function(req, res) {
    res.render('journal.liquid', {files: files})
})

app.get('/journal/:slug', async function(req, res) {
    console.log(req.params.slug)
    const fileContents = await readFile('content/' + req.params.slug + '.md', { encoding: 'utf8' })
    const opgemaakteContent = marked.parse(fileContents)
    res.render('artikel.liquid',{fileContents: opgemaakteContent} )
})

app.get('/classmates', async function (req, res) {
    const personResponse = await fetch('https://fdnd.directus.app/items/person/?sort=team&fields=*,squads.squad_id.name,squads.squad_id.cohort&filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}}]}')
    const personResponseJSON = await personResponse.json()
  
    res.render('classmates.liquid', {persons: personResponseJSON.data})
  })
  


app.use(express.urlencoded({extended: true}))

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
    console.log(`Application started on http://localhost:${app.get('port')}`)
})