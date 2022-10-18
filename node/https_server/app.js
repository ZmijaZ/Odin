const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send("Hello from express server.")
})

module.exports = app;