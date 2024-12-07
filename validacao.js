import Joi from "joi";

export const modeloCarro = Joi.object({
    //validação para a inclusao de modelo de carro
    nome: Joi.string().min(3).required(),
    sigla: Joi.string().length(3).required(),
    potencia: Joi.number().min(1).required(),
    velocidadeMaxima: Joi.number().min(1).required(),
    consumo: Joi.number().min(0.1).required(),
    aceleracao: Joi.number().min(0).required(),
    preco: Joi.number().min(0).required(),

});

export const modeloAtualizacaoCarro = Joi.object({
    nome: Joi.string().min(3),  //nome do carro
    sigla: Joi.string().length(3), //sigla do carro
    potencia: Joi.number().min(1), //
    velocidadeMaxima: Joi.number().min(0.1), //
    aceleracao: Joi.number().min(0), //aleração opcional
    preco: Joi.number().min(0), //preco opcional
    ano: Joi.number().integer(0).min(1886).max(new Date().getFullYear()),
}).min(1); // pelo menos um campo precisa ser atualizado 
//modelo para atualizar o carro
