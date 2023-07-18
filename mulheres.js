const express = require('express') // iniciando o express
const router = express.Router() // configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid')

const conectaBancoDeDados = require('./bancoDeDados') //ligando ao arquivo bancoDeDados
conectaBancoDeDados() //chamando a função que conecta o banco de dados

const app = express() // iniciando o app
app.use(express.json())
const porta = 3333; // criando a porta

// criando a lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome: 'Renata Arruda',
        imagem: 'https://encurtador.com.br/vCSV0',
        minibio: 'Estagiária de desenvolvimento de software'
    },
    {
        id: '2',
        nome: 'Iana Chan',
        imagem: 'https://encurtador.com.br/mLNPQ',
        minibio: 'Fundadora da Programaria'
    },
    {
        id: '3',
        nome: 'Nina da Hora',
        imagem: 'https://encurtador.com.br/eoIQY',
        minibio: 'Hacker antirracista'
    },
    {
        id: '4',
        nome: 'Simara Conceição',
        imagem: 'https://encurtador.com.br/hpIY3',
        minibio: 'Desenvolvedora e instrutora'
    }
]

// GET
function mostraMulheres(request, response){
    response.json(mulheres)
}

// POST
function criarMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher);

    response.json(mulheres);
}

//PATCH
function corrigeMulher(request, response){

    function encontraMulher(mulher){
        if(mulher.id === request.params.id){
            return mulher
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher)

    if (request.body.nome){
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.imagem){
        mulherEncontrada.imagem = request.body.imagem
    }

    if (request.body.minibio){
        mulherEncontrada.minibio = request.body.minibio
    }

    response.json(mulheres)
}

//DELETE
function deletaMulher(request, response){

    function todasMenosEla(mulher){
        if(mulher.id !== request.params.id){
            return mulher
        }
    }

    const mulherQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulherQueFicam)
}

// PORTA
function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulheres', mostraMulheres)) // configuração de rota GET /mulheres
app.use(router.post('/mulheres', criarMulher)) // configuração de rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) //configuração rota PATCH /mulheres
app.use(router.delete('/mulheres/:id', deletaMulher)) // configuração rota DELETE /mulheres
app.listen(porta, mostraPorta) // servidor ouvindo a porta