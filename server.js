const express = require('express');
const cors = require('cors');

const barracasRoutes = require('./routes/barracas');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/barracas', barracasRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});