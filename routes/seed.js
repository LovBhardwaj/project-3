const mongoose = require('mongoose');

const quote = require('../quotes/quotes');

const quotes = [{

    name: "Luv  Bhardwaj",
    quotes: "Radhe Radhe !"
},
{

    name: "Nikhil Sharma",
    quotes:"Sab ka Malik Ek !"
},

{

    name: "Sam Bhaiya",
    quotes:"Summer mei samarth :)"
}

]

async function seedDB(){
    await quote.insertMany(quotes);
    console.log("Data Seeded succesfully")

    module.exports =  seedDB;
   
}