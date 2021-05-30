const produtos = require('../database/models/produtos');

module.exports = {
    async get(req,res){
        let {nome} = req.query || undefined; // guardando o valor do nome do produto a ser pesquisadod
        if(!nome)  return res.status(200).render('buscar', {s_produto:''});
        let response = await produtos.findOne({nome});
        if(!response) return res.status(200).render('buscar', {s_produto:''});
        //return res.status(200).send(response);
        return res.status(200).render('buscar', {s_produto:response});
    },

    async update(req,res){
        let body = req.query || undefined;
        console.log(body)
        if(!body) return res.status(400).send({x:'parametros incorretos'});
        await produtos.updateOne({_id: body._id}, {marca: body.marca , quantidade: body.quantidade})
        .then(value=>
            produtos.find().then(value=>value)
            .then(produtos=>res.render('index' , {produtos}))    
        )
        .catch(erro=>console.error);
    },

    async insert(req,res){
        let body = req.query || undefined;
        if(!body) return res.status(200).render('buscar', {s_produto:''});
        
        produtos.findOne({nome: body.nome}).then(value=>{
            if(value) return res.status(200).render('buscar', {s_produto:''})
            else{
                 new produtos(body).save().then((x)=>{
                    //res.status(200).send(x)
                    produtos.find().then(value=>value)
                    .then(produtos=>res.render('index' , {produtos}));
                }).catch(err=>res.status(400).send(err));
            }
        })
    },

    async delete(req,res){
        let body = req.query || undefined;
        if(!body) return res.status(400).send({x:'parametros incorretos'});
        console.log(body)

        await produtos.deleteOne({_id: body._id}).then((value)=> {
            produtos.find().then(value=>value)
            .then(produtos=>res.render('index' , {produtos}));
        });
    }
}