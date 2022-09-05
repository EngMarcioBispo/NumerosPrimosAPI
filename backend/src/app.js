const express = require('express');
const rotas = require('./router');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3003;

app.use(express.json());
app.use(cors());
app.use(rotas);

app.listen(port);
