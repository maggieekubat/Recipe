import express from 'express'
import { logger } from './middlewares/logger.js'

//import { json } from './data.json'
//const data = json
//const data = require('./data.json')

const recipes = {
    mushroom_rice : [
        "mushroom rice",
        "mushroomrice",
        "mushroom-rice"
    ],
    gnocchi_bake : [
        "gnocchi bake", 
        "gnocchibake",
        "gnocchi-bake"
    ]

}

const app = express()
app.set('view engine', 'ejs')
const PORT = 3000
app.use(logger)
app.use('/recipe', express.static('public/recipe'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


app.get('/', (request, response) => {
    response.render('index')
})

app.get('/product', (request, response) => {
    response.send(`The product name is ${data.title}`)
})

app.post('/contact', (request, response) => {
    console.log('contact form submission', request.body)
    response.send('Thanks for your message. We will be in touch soon')
})


app.get('/recipe/:slug', (request, response) => {
    const recipeId = request.params.slug
    for (const [key, value] of Object.entries(recipes)){
        for (const slugName of value) {
            if (recipeId === slugName && key === "mushroom_rice") {
                response.render("mushroom_rice")
            } else if (recipeId === slugName && key === "gnocchi_bake"){
                response.render("gnocchi_bake")
            }
        }

    }

    //response.send(`A recipe with the name '${recipeId}' could not be found`)
})

app.listen(PORT, () => {
    console.log(`Started server on port ${PORT}`)
})