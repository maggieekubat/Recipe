import express from 'express'
import { logger } from './middlewares/logger.js'

const app = express()
app.set('view engine', 'ejs')
const PORT = 3000
app.use(logger)
app.use('/recipe', express.static('public/recipe'))
app.use(express.static('public'))


app.get('/', (request, response) => {
    response.render('index')
})

app.get('/contact', (request, response) => {
    response.send('Reach out to us if you have any questions.')
})

app.get('/recipe/:slug', (request, response) => {
    const recipeId = request.params.slug

    response.send(`A recipe with the name '${recipeId}' could not be found`)
})

app.listen(PORT, () => {
    console.log(`Started server on port ${PORT}`)
})


// Make a List here with recipes so that a user can
// look up mushroom rice without typing the .html

// Also maybe do another recipe so that its not just a list of one recipe

const recipes = {}

//recipes[mushroom_rice] = ["mushroom rice", "mushroomrice", "mushroom-rice", ]
//recipes[gnocchi_bake] = ["gnocchi bake", "gnocchibake", "gnocchi-bake", ]
