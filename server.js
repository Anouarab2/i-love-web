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


app.use(express.urlencoded({extended: true}))

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
    console.log(`Application started on http://localhost:${app.get('port')}`)
})