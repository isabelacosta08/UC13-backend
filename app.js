import carros2024 from './tabela.js';
import express from 'express';

import { modeloCarro, modeloAtualizacaoCarro } from './validacao.js';
//Chamando o express
const app = express();

//Usando .Json no Express
app.use(express.json());

//Fazendo a requisição
app.get('/', (requisicao, resposta) => {
    resposta.status(200).send(carros2024);
});

app.get('/:sigla', (requisicao, resposta) => {

    const siglaInformada = requisicao.params.sigla.toUpperCase();  // to uppercase o que o user armazenar será armazenada na var sigla Informada | requerendo a sigla
    const carro = carros2024.find((infoCarro) => infoCarro.sigla === siglaInformada) // 
    if (!carro) {
        // ! Vazio Not - if resposta for vazia resultara em erro se estiver correta, tras a informação
        resposta
            .status(404)
            .send(
                'Não existe um carro com a sigla informada!' //mensagem de erro caso o user não insira os dados
            );

        return;
    }
    resposta.status(200).send(carro); // caso encontre a sigla retorna a resposta correta
})

app.post('/', (req, res) => {
    const novoCarro = req.body; //obtem o corpo enviado para incluir um carro
    //JOI
    const { error } = modeloCarro.validate(novoCarro);
    if (error) {
        //se houver erro retorna erro 400 like as bad request
        res.status(400).send(error);
        return;
    }


    carros2024.push(novoCarro);     //add o novo carro na lista de carros
    res.status(201).send(novoCarro); //return o carro add com status (200) ok

});

//
app.put('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase();
    const carroSelecionado = carros2024.find(c => c.sigla === siglaInformada);
    if (!carroSelecionado) {
        res
            .status(404)
            .send('Não existe um carro com a sigla informada'

            );
        return;

    };

    //JOI --- criamos a validação em validação.js e apenas chamamos essa validação por aqui
    const { error } = modeloAtualizacaoCarro.validate(req.body);
    if (error) {
        //se houver erro no modelo/validacao retorna erro 
        res.status(400).send(error);
        return;
    }


    const campos = Object.keys(req.body);
    for (let campo of campos) {
        carroSelecionado[campo] = req.body[campo];
    }
    res.status(200).send(carroSelecionado)
});



//deletar uma informação, req de delete , no delete trabalhamos com indice
app.delete('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase();
    const IndiceCarroSelecionado = carros2024.findIndex(
        (c) => c.sigla === siglaInformada
    );
    if (IndiceCarroSelecionado === -1) {
        res
            .status(404)
            .send(
                'Não existe um carro com a sigla informada!' //mensagem de erro
            );
        return
    };


    const carroRemovido = carros2024.splice(IndiceCarroSelecionado, 1); //remove o carro
    res.status(200).send(carroRemovido); //retorna o carro removido com OK
});

//Rodando servidor
app.listen(3000, () => console.log("Servidor Rodando com sucesso"))

//

