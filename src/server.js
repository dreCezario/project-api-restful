const express = require('express')
// const path = require('path')

const db = require('./database')
const routes = require('./routes')

const app = express()

// coneção com o banco de dados
db.connect()

// habilita server para receber dados no formato JSON
app.use(express.json())

//rotas
app.use('/api', routes)


// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))

