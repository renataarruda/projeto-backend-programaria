const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: 'Renata Arruda',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQFyuopvXx409Q/profile-displayphoto-shrink_200_200/0/1686168679126?e=1695254400&v=beta&t=sSwrWZBU4F7PFD8PfmsSku3E1BA_7pDU-1nNoc-CyLA',
        minibio: 'Estagiária de desenvolvimento de software e redatora'
    })
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)