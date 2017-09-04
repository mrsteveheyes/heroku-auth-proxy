const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8080

// Set up app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.text())
app.use(bodyParser.json({type: 'application/json'}))

app.get('/', (req, res) =>
  res
    .status(400)
    .json({error: "InvalidParameters", message: "The paramaters you passed where invalid"})
)

app.listen(port)
console.log(`Listening on port ${port}`)

module.exports = app;
