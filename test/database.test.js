const database = require('../src/database/index');
const produtos = require('../src/database/models/produtos');

describe('BANCO DE DADOS', ()=>{
  var PRODUTO_TESTE = {
    id:'00202020100',
    nome:'Produtos Teste',
    marca:'Lou',
    quantidade:11 
  }

  it('Conectando com o banco de dados' , async()=>{
    let a =  await database.connect(); 
    return expect(a).toBe(true)
  })

  it('Inserindo Produto Teste', async()=>{
    await new produtos(PRODUTO_TESTE).save().then((value)=>{
      expect(value.id).toBe(PRODUTO_TESTE.id)
    });
  })

  it('Buscando Produto Teste', async()=>{
    let response = await produtos.find({nome:PRODUTO_TESTE.nome})
    expect(response[0].marca).toBe(PRODUTO_TESTE.marca)
  })

  it('Atualizando Produto Teste', async()=>{
    PRODUTO_TESTE.marca = 'TesteUpdate';
    await produtos.updateOne({nome:PRODUTO_TESTE.nome}, {marca:PRODUTO_TESTE.marca})
    .then(value=>expect(value.ok).toBe(1))
  })

  it('Deletando registro de Teste', async()=>{
    await produtos.deleteOne({marca: PRODUTO_TESTE.marca})
    .then(value=>expect(value.ok).toBe(1))
  })
})