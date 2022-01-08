const express = require('express')
const router = express.Router()

const path = require('path')
const basePath = path.join(__dirname, '../templates')

router.post('/home', (req, res) => {
    console.log(req.body)
    const name = req.body.name

    console.log(`Seja Bem vindo ${name}!`)
    res.sendFile(`${basePath}/home.html`)
})

module.exports = router