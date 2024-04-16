import express from 'express'
import mongoose  from 'mongoose'
import { logger, recipeSlug } from './middlewares/logger.js'
import "dotenv/config"

const ingredientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    unit: { type: String, required: true }
})

const recipeSchema = new mongoose.Schema({
    slug: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    description: {type : String},
    isOnline: { type: Boolean, default: true, required: true },
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }]
})

const Recipe = mongoose.model('recipe', recipeSchema)
const Ingredient = mongoose.model('ingredient', ingredientSchema)


const app = express()
app.set('view engine', 'ejs')
const PORT = 3000
app.use(logger)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Database connected'))
    .catch(error => console.error(error))

app.get('/', (request, response) => {
    const recipeNumber = {  
        numberOfRecipes: Object.keys(recipeSlug).length
    }
    response.render('home', recipeNumber)
})

app.get('/about', (request, response) => {
    response.render('about')
})

app.get('/admin', (request, response) => {
    response.render('admin_login')
})

app.get('/contact', (request, response) => {
    response.render('contact')
})

app.post('/contact', (request, response) => {
    console.log('contact form submission', request.body)
    response.send('Thanks for your message. We will be in touch soon')
})



app.get('/recipes', async (request, response) => {
    try {
        const recipes = await Recipe.find({ isOnline: true }).exec()

        response.render('recipes/index', {
            recipes: recipes
        })
    } catch (error) {
        console.log(error)
        response.render('recipes/index', {
            recipe: []
        })
    } 
})

app.post('/recipes', async (request, response) => {

    const ingredients = await Ingredient.find({ name: {$in: request.body.ingredients}}).exec()

    const ingredientIds = ingredients.map(i=> i._id)

    try {
        const recipe = new Recipe({
            slug: request.body.slug,
            name: request.body.name,
            description: request.body.description,
            ingredients: ingredientIds,
        })
        await recipe.save()

        response.send('Recipe Created')
    }catch (error) {
        console.error(error)
        response.send('Error: ' + error.message)
    }
})


app.get('/recipes/new', (request, response) => {
    console.log("test")
    response.render('recipes/new')
})


app.get('/recipes/:slug', async (request, response) => {
    const recipeId = request.params.slug

    for (const [key, value] of Object.entries(recipeSlug)){
        for (const slugName of value) {
            if (recipeId === slugName && key === "mushroom_rice") {
                return response.render("mushroom_rice")
            } else if (recipeId === slugName && key === "gnocchi_bake"){
                return response.render("gnocchi_bake")
            }
        }
    }
    try {
        console.log("recipeId:", recipeId)
        const recipe = await Recipe.findOne({ slug: recipeId}).exec()
        
        response.render('recipes/show', {
            recipe: recipe
        })
        console.log(recipe)
    } catch(error) {
        console.error(error)
        console.log('that did not work')
    }
})

app.post('/recipes/:slug', async (request, response) => {
    console.log("endpoint hit")
    try {
        const recipe = await Recipe.findOneAndUpdate(
            { slug: request.params.slug },
            request.body,
            { new: true }
        )
        
        response.redirect(`/recipes/${recipe.slug}`)
    } catch (error) {
        console.error(error)
        response.send('Error at /recipes/:slug:', error.message)
    }
})

app.get('/recipes/:slug/edit', async (request, response) => {
    try {
        const recipeId = request.params.slug
        const recipe = await Recipe.findOne({ slug: recipeId}).exec()
        if(!recipe) throw new Error('Recipe not found')

        response.render('recipes/edit', {
            recipe: recipe
        })
        console.log(recipe)
    } catch(error) {
        console.error(error)
        console.log('that did not work')
    }
})

app.get('/recipes/:slug/delete', async (request, response) => {
    try {
        await Recipe.findOneAndDelete({ slug: request.params.slug })

        response.redirect('/recipes')
    } catch (error) {
        console.error(error)
        response.send('Error: No recipe was deleted')
    }
})

app.listen(PORT, () => {
    console.log(`Started server on port ${PORT}`)
})