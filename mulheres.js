const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Renata Arruda',
        imagem: 'https://encurtador.com.br/vCSV0',
        minibio: 'Estagiária de desenvolvimento de software'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://encurtador.com.br/mLNPQ',
        minibio: 'Fundadora da Programaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://encurtador.com.br/eoIQY',
        minibio: 'Hacker antirracista'
    },
    {
        nome: 'Simara Conceição',
        imagem: 'https://encurtador.com.br/hpIY3',
        minibio: 'Desenvolvedora e instrutora'
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)