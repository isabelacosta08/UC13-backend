# API de carros - webAPI

está e uma api restful desenvolvida para o gerenciamento de informações de carros, utilizando **Node.js** e **Express**. A API permite criar, ler, atualizar e excluir carros, com validação dos dados utilizando a biblioteca **Joi**. Este é um projeto inicial de CRUD(Create, read,update,delete), que será expandido no futuro. Este é apenas o escopo inicial. 

## Funcionalidades 

**GET /**: Retorna a lista completa de carros. 
**GET /:sigla** : Retorna as informações de um carro especifíco, identificado pela sigla. 
**POST /**: Adiciona um novo carro á lista.
**PUT /:sigla**: Atualiza as informações de um carro especifíco, identificado pela sigla.
**DELETE /:sigla**: Remove um carro especifíco pela sigla. 


## Estrutura de Projetos
 **apps.js**: Arquivo prinicpal que configura o servidor Express e as todas da API.
 **tabelacarros.js**: Contém a lista de carros (dados fícticios)
 **validacao.js**: Contém as validações Joi para os dados dos carros.

 ## Endpoints

 ### 1. **GET /**
 
 Retorna a lista completa de carros disponíveis.


 ### Exemplo de Respostas

 ```json
 [{
 
    "nome":"Ferrari",
    "sigla":"FER",
    "velocidadeMaxima":340,
    "potencia":800,
    "consumo":5.5,
    "aceleracao":2.9,
    "preco":3000000,




 },
 ]
 ```