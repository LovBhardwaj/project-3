const express = require('express');
const quote = require('../quotes/quotes');
const router = express.Router()



router.get('/quotes', async(req,res)=>{
    let quotes = await quote.find({});
    res.render('quotes/index2' , {quotes})
})

module.exports = router;