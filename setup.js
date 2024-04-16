import mongoose  from 'mongoose'
import "dotenv/config"


const ingredientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    unit: { type: String, required: true }
})

const recipeSchema = new mongoose.Schema({
    slug: { type: String,                       vcbgvnique: true, required: true },
    name: { type: String, required: true },
    description: {type : String},
    isOnline: { type: Boolean, default: true, required: true },
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }],
})

const Recipe = mongoose.model('recipe', recipeSchema)
const Ingredient = mongoose.model('ingredient', ingredientSchema)

mongoose.connect(process.env.MONGODB_URI)
    .then(seedDatabase)
    .catch(error => console.error(error))

async function seedDatabase() {

    await Recipe.delete({});
    await Ingredient.delete({});

    // Ingredients

    const butter = await new Ingredient({ 
        name: 'Butter', 
        quantity: 2, 
        unit: 'cups',
    }).save();

    const carrot = await new Ingredient({ 
        name: 'Carrot', 
        quantity: 2, 
        unit: 'cups',
    }).save();

    const cream = await new Ingredient({ 
        name: 'Cream', 
        quantity: 2, 
        unit: 'cups',
    }).save();

    const flour = await new Ingredient({ 
        name: 'Flour', 
        quantity: 2, 
        unit: 'cups',
    }).save();

    const garlic = await new Ingredient({ 
        name: 'Garlic', 
        quantity: 2, 
        unit: 'cups',
    }).save();

     const gnocchi = await new Ingredient({ 
        name: 'Gnocchi', 
        quantity: 2, 
        unit: 'cups',
    }).save();

    const mushroom = await new Ingredient({ 
        name: 'Mushroom', 
        quantity: 2, 
        unit: 'cups',
    }).save();

    const noodles = await new Ingredient({ 
        name: 'Noodles', 
        quantity: 2, 
        unit: 'cups',
    }).save();

    const oats = await new Ingredient({ 
        name: 'Oats', 
        quantity: 2, 
        unit: 'cups',
    }).save();

    const oliveOil = await new Ingredient({ 
        name: 'Olive Oil', 
        quantity: 2, 
        unit: 'cups',
    }).save();

    const onion = await new Ingredient({ 
        name: 'Onion', 
        quantity: 2, 
        unit: 'cups',
    }).save();

    const pasta = await new Ingredient({ 
        name: 'Pasta', 
        quantity: 2, 
        unit: 'cups',
    }).save();

    const pepper = await new Ingredient({ 
        name: 'Pepper', 
        quantity: 2, 
        unit: 'cups',
    }).save();

    const rice = await new Ingredient({ 
        name: 'Rice', 
        quantity: 2, 
        unit: 'cups',
    }).save();

    const salt = await new Ingredient({ 
        name: 'Salt', 
        quantity: 2, 
        unit: 'cups',
    }).save();

    const sugar = await new Ingredient({ 
        name: 'Sugar', 
        quantity: 2, 
        unit: 'cups',
    }).save();

    const tomatoPaste = await new Ingredient({ 
        name: 'Tomato Paste', 
        quantity: 2, 
        unit: 'cups',
    }).save();

    const vegStock = await new Ingredient({ 
        name: 'Veg Stock', 
        quantity: 2, 
        unit: 'cups',
    }).save();

    // Recipes

    const sache = await new Recipe({
        slug: 'sache',
        name: 'Sache Torte',
        description: 'A delicious cake from the Austrian Alps',
        ingredients: [flour._id, sugar._id, salt._id]
    }).save();

    const oatCookies = await new Recipe({
        slug: 'oat-cookies',
        name: 'Oat Cookies',
        description: 'The best cookies that are not as unhealthy as they look',
        ingredients: [oats._id, sugar._id, salt._id]
    }).save();

    const gochujangNoodles = await new Recipe({
        slug: 'gochujang-noodles',
        name: 'Gochujang Noodles',
        description: 'Easiest spicy noodles you can make under 15 minutes',
        ingredients: [noodles._id, garlic._id, salt._id]
    }).save();

    const mushroomRice = await new Recipe({
        slug: 'mushroom-rice',
        name: 'Mushroom Rice',
    }).save();

    const gnocchiBake = await new Recipe({
        slug: 'gnocchi-bake',
        name: 'Gnocchi Bake',
    }).save();
}