const express = require('express');
const app = express();
const health = require('./src/health-check/controller')

app.listen(3000,()=>{
    health(app);
    console.log("http://localhost:3000");
})