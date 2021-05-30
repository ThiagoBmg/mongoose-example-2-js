const router = require('express').Router();
const produtoss = require('../database/models/produtos');

router.get('/', async (req,res)=>{
    const produtos = await produtoss.find().then(value=>value);
    res.render('index' , {produtos})
});

router.get('/buscar', async(req,res)=>{
    let s_produto;
    res.render('buscar', {s_produto})
})

router.get('/adicionar', async(req,res)=>{
    res.render('adicionar')
})

module.exports = router;