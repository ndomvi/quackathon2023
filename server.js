const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

app.use('/', express.static(path.join('web')))
app.use(express.static(path.join('js')))
app.use('/css', express.static('css'))

app.listen(1000, () => {
  console.log(` listening at http://localhost:1000`)
})
