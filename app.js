import express from 'express'
import mongoose  from 'mongoose'
import { logger } from './middlewares/logger.js'

//import { json } from './data.json'
//const data = json
//const data = require('./data.json')

const recipeSchema = new mongoose.Schema({
    slug: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    isOnline: { type: Boolean, default: true, required: true }
})

const Recipe = mongoose.model('RecipeList', recipeSchema)

// const recipeList = [
//     { name: 'Mushroom Rice', slug: 'mushroom-rice', isOnline: true},
//     { name: 'Gnocchi Bake', slug: 'gnocchi-bake', isOnline: true}
// ]

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
const recipeNumber = {  
    numberOfRecipes: Object.keys(recipes).length
}

const app = express()
app.set('view engine', 'ejs')
const PORT = 3000
app.use(logger)
app.use('/recipe', express.static('public/recipe'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb+srv://maggiekubat:QxGhYUeQbDybrKgD@recipeproject.2mteths.mongodb.net/?retryWrites=true&w=majority&appName=recipeProject')
    .then(() => console.log('Database connected'))
    .catch(error => console.error(error))

app.get('/', (request, response) => {
    response.render('index', recipeNumber)
})

app.get('/home', (request, response) => {
    response.render("home")
})

app.get('/about', (request, response) => {
    response.render('about')
})

app.get('/admin', (request, response) => {
    response.render('admin_login')
})

app.post('/admin', (request, response) => {
    console.log('log in credentials:', request.body)
    response.send('You are now in admin mode')
})

app.get('/contact', (request, response) => {
    response.render('contact')
})

// app.get('/product', (request, response) => {
//     response.send(`The product name is ${data.title}`)
// })

app.post('/contact', (request, response) => {
    console.log('contact form submission', request.body)
    response.send('Thanks for your message. We will be in touch soon')
})

app.get('/recipe', (request, response) => {
    response.render('recipe/index'/*, {recipeList: recipeList}*/)
})

app.get('/recipe/new', (request, response) => {
    response.render('recipe/new')
})

app.get('/recipe/:slug', (request, response) => {
    const recipeId = request.params.slug

    for (const [key, value] of Object.entries(recipes)){
        for (const slugName of value) {
            //console.log(slugName);
            if (recipeId === slugName && key === "mushroom_rice") {
                return response.render("mushroom_rice")
            } else if (recipeId === slugName && key === "gnocchi_bake"){
                console.log(recipeId)
                return response.render("gnocchi_bake")
            }
        }

    }
    return response.send(`A recipe with the name '${recipeId}' could not be found`)
})

app.post('/recipe', async (request, response) => {
    try {
        const recipe = new Recipe({
            slug: request.body.slug,
            name: request.body.name
        })
        await recipe.save()

        response.send('Recipe Created')
    }catch (error) {
        console.error(error)
        response.send('Error: The recipe could not be created, a recipe with this name may exist already')
    }
})



app.listen(PORT, () => {
    console.log(`Started server on port ${PORT}`)
})