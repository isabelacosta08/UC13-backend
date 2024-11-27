import carros2024 from './tabela.js';
import express from 'express';

//Chamando o express
const app = express();

//Usando .Json no Express
app.use(express.json());

//Fazendo a requisição
app.get('/', (requisicao, resposta) => {
    resposta.status(200).send(carros2024);
});

//Rodando servidor
app.listen(3000,() => console.log ("Servidor Rodando com sucesso"))