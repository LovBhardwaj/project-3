require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./routes/seed');
const quoteroute = require('./routes/quoteroute');
// const mainRoutes = require('routes')
// app.use(mainRoutes)


mongoose.connect(process.env.DB_URL)
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)})









app.set('view engine', 'ejs');
app.set('views', path.join(__dirname , 'views'));



app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/home.ejs',(req,res)=>{
    res.render('home')
})

app.get('/all-quotes.ejs',(req,res)=>{
    res.render('all-quotes')
})





app.get('/new-quotes.ejs',(req,res)=>{
    res.render('new-quotes')
})





app.use(quoteroute);







const port = process.env.PORT || 8000;
app.listen(port , ()=>{
    console.log('server found at 8082')
})





