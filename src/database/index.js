const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/api-restful')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('Connected to database!')
    })

    db.on('error', console.error.bind(console,"deu ruim!"))
}

module.exports = {
    connect
}