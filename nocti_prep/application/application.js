const express = require('express');
const fs = require('fs');
var app = express()
app.set("view engine", 'ejs')
app.use(express.urlencoded({extended: true}))

app.listen(5000)
