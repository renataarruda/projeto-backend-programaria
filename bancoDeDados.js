const mongoose = require('mongoose')

async function conectaBancoDeDados() {
    try {
        console.log('Conexão com o banco de dados iniciou')

        await mongoose.connect('mongodb+srv://renataarruda85:I3jT6WATEDf0SPbX@clustermulheres.8qy9tb9.mongodb.net/?retryWrites=true&w=majority')

        console.log('Conexão com o banco de dados feita com sucesso!')
    } catch (erro) {
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados