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