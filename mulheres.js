const express = require('express') // iniciando o express
const router = express.Router() // configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid')

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

// PORTA
function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulheres', mostraMulheres)) // configuração de rota GET /mulheres
app.use(router.post('/mulheres', criarMulher)) // configuração de rota POST /mulheres
app.listen(porta, mostraPorta) // servidor ouvindo a porta