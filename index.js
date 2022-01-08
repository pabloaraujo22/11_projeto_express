const express = require('express')
const app = express()

const port = 5000

//modulo interno
const path = require('path')
const basePath = path.join(__dirname + '/templates')

const users = require('./user')

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use(express.static('public'))

app.use('/', users)

app.get('/', (req, res) => {
    res.status(200).sendFile(`${basePath}/index.html`)
})

app.use((req, res, next) => {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))