const express = require('express');
const app = express();
const database = require('./src/database');

database.connect();

const PORT = process.env.PORT || 3030;

app.use(express.json());
app.set(express.static('./src/public'));
app.set('view engine', 'ejs');

app.use(require('./src/routes/produtos'));

app.listen(PORT,()=>console.log(`Servidor rodando na porta ${PORT}`))