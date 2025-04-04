import express, { response } from 'express'

import { Liquid } from 'liquidjs';


const app = express()

app.use(express.static('public'))

const engine = new Liquid();
app.engine('liquid', engine.express()); 

app.set('views', './views')


app.get('/journal', async function(req, res) {

    res.render('journal.liquid')
})

app.get('/', async function(req, res) {

    res.render('index.liquid')
})

app.use(express.urlencoded({extended: true}))

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
    console.log(`Application started on http://localhost:${app.get('port')}`)
})