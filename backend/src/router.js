const express = require('express');
const divisores = require('./controller/divisores')

const rotas = express();


rotas.get('/divisores/:entrada', divisores);

module.exports = rotas;