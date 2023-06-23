const express = require('express')
// const path = require('path')

// const db = require('./database')
const routes = require('./routes')

const app = express()

// coneção com o banco de dados
// db.connect()

// habilita o server parar receber dados via POST (formulário)
app.use(express.urlencoded({ extended: true }))

//rotas
app.use('/api', routes)


// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))

