const express = require('express')

const path = require('path')

const app = express()



const caminho = path.join(__dirname, 'templates')

// GET => Envia informações do back-end para o front-end
// POST => Recebe informações do front-end no back-end

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminho}/index.html`)
})

app.listen(3000, () => {
    console.log("Servidor rodando no porta 3000")
})