const mongoose = require('mongoose');

// definindo o schema de produtos
const produtoSchema = mongoose.Schema({
       id:String,
       nome:String,
       marca:String,
       quantidade:Number 
});

// definindo o modelo de produtos
const produtoModel = mongoose.model('produtos', produtoSchema);
module.exports = produtoModel;