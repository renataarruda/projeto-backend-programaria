# API Mulheres em Tech Brasil

Projeto de criação de API que retorna informações de mulheres brasileiras na tecnologia.

Feito durante o curso **Eu ProgrAmo: Back-End 1**, da Programaria.

## Projeto

O objetivo é a realização de um CRUD para criar, ler, atualizar e deletar informações de tecnologistas brasileiras a partir do site [Mulheres em Tech Brasil](https://front-programaria-react-theta-fawn.vercel.app/).

## Tecnologias
NodeJS, Express, Mongoose, MongoDB.

## Desenvolvimento

Na primeira versão do projeto, foi mostrado como criar e rodar um servidor local (```localhost:3333```), criar o ```GET``` do projeto, colocar o servidor na nuvem e fazer o deploy na plataforma [**Render**](back-end-8nks.onrender.com/mulheres).

Também foi ensinada a criação de rotas ```POST``` e ```PATCH```, além da requisição ```DELETE```, com a utlização da ferramenta **Insomnia** para a realização de testes locais. 

Utilizamos a biblioteca [```UUID```](https://www.npmjs.com/package/uuid) para a geração automática de ```ids```.

Para a versão final do projeto, foi utilizado o pacote ```Mongoose``` para integração com o banco de dados MongoDB. A proteção de dados sensíveis foi feita utilizando a biblioteca ```dotenv```.

Por fim, o projeto foi [integrado ao front-end](https://github.com/renataarruda/front-programaria-react), previamente desenvolvido pela instrutora Simara Conceição, com atualização do link para conexão com a API criada durante o curso.
