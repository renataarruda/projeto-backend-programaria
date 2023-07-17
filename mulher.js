const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: 'Renata Arruda',
        imagem: 'https://encurtador.com.br/vCSV0',
        minibio: 'Estagiária de desenvolvimento de software e redatora'
    })
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)