const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('We are on HOME!')
})

module.exports = app
