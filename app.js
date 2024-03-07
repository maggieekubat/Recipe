import express from 'express'
import { logger } from './middlewares/logger.js'

const app = express()
const PORT = 3000
app.use(logger)
app.use('/recipe', express.static('public/recipe'))
app.use(express.static('public'))

// Make a List here with recipes so that a user can
// look up mushroom rice without typing the .html

app.get('/', (request, response) => {
    response.send('Welcome to my 🍪 Cookieshop!')
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