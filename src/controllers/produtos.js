const produtos = require('../database/models/produtos');

module.exports = {
    async get(req,res){
        let {name} = req.body || undefined;
        if(!name) return res.status(400).send({x:'produto não encontrado'});
        let response = await produtos.findOne({name});
        if(!response) return res.status(400).send({x:'produto não encontrado'});
        return res.status(200).send(response);
    },

    async update(req,res){
        let body = req.body || undefined;
        if(!body) return res.status(400).send({x:'parametros incorretos'});
        await produtos.updateOne({nome:body.nome}, {marca: body.marca}).then(value=>res.status(200).send(value));
    },

    async insert(req,res){
        let body = req.body || undefined;
        if(!body) return res.status(400).send({x:'parametros incorretos'});
        await new produtos(body).save().then(x=>res.status(200).send(x)).catch(err=>res.status(400).send(err));
    },

    async delete(req,res){
        let body = req.body || undefined;
        if(!body) return res.status(400).send({x:'parametros incorretos'});
        await produtos.deleteOne(body).then(value=>res.status(200).send(value));
    }
}