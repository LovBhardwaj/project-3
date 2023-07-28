const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    name:{
        type: String,
        trim : true,
        required: true,

    },

    quotes:{
        type: String,
        trim: true

    }

});

const quote = mongoose.model('Quotes' , quoteSchema);

module.exports = quote;
