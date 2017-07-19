const express = require('express')
const app = express()

var port = process.env.PORT || 3001

app.get('/', function (req, res) {
  res.send('Hola Heroku')
})

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})