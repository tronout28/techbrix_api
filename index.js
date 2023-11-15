const express = require('express')
const app = express()
const port = 3000
const db = require('./connection')
const response = require('./response')


//route utama get 
app.get('/', (req, res) => {
    db.query((error, result) => {
       response(200, result, " /headset ,/handphone, /laptop", res)
    })
})

app.get('/headset', (req, res) => {
    const sql = "SELECT * FROM headset"
    db.query( sql ,(error, result) => {
       response(200, result, "data from headset", res)
    })
})

app.get('/laptop', (req, res) => {
    const sql = "SELECT * FROM laptop"
    db.query( sql ,(error, result) => {
       response(200, result, "data from headset", res)
    })
})

app.get('/handphone', (req, res) => {
    const sql = "SELECT * FROM handphone"
    db.query( sql ,(error, result) => {
       response(200, result, "data from headset", res)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})