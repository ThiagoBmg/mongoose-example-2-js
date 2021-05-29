const mongoose = require('mongoose');

module.exports = {
    async connect (){
        return mongoose.connect('mongodb://localhost/trab14', {useNewUrlParser:true, useUnifiedTopology:true}) // iniciando conexão com o banco de dados
        .then(()=>true) // caso a conexão funcione retorna mensagem no console 
        .catch((error)=>console.error) // retornando erro caso a conexão com o banco falhe
    }
};
