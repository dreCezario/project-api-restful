const express = require('express')
const cors = require('cors')

const db = require('./database')
const routes = require('./routes')

const app = express()

// coneção com o banco de dados
db.connect()

const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://www.showdafe.com.br'
]

// habilita o CORS
app.use(cors({
    origin: function(origin, callback) {
        let allowed = true

        //mobile app
        if(!origin) {
            allowed = true
        }

        if(!allowedOrigins.includes(origin)) {
           allowed = false 
        }
        console.log(origin)
        console.log(allowed)
        callback(null, allowed)
    }
}))

// habilita server para receber dados no formato JSON
app.use(express.json())

//rotas
app.use('/api', routes)


// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))

