const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/pizzeriadb')
.then(()=> console.log("MOngoose is running"))
.catch((err)=> console.log("Mongodb connection unsuccesful"));


const Pizza = mongoose.model('Pizza', {
    id: String,
    type: String,
    price: Number,
    name: String,
    image: String,
    description: String,
    ingredients: [String],
    topping: [String]
});
const Ingredient = mongoose.model('Ingredient', {
    id:String,
    tname:String,
    price:String,
    image:String
});

app.get('/api/pizzas' ,async (req, res)=> {
    try{
        const pizzas = await Pizza.find()
        res.json(pizzas);
    } catch(error) {
        res.status(500).json({message:"Error fetching pizza menu"});
    }
});

app.get('/api/ingredients' ,async (req, res)=> {
    try{
        const ingredient = await Ingredient.find()
        res.json(ingredient);
    } catch(error) {
        res.status(500).json({message:"Error fetching ingredients"});
    }
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
