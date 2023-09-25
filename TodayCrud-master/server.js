const express = require('express')
const app = express()
require('dotenv').config({path:'./.env'})
const connect = require('./db')
const port = process.env.PORT ;
const UserRoutes = require('./routes/userRoutes.js')
connect()
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });

app.use('/api',UserRoutes)
app.listen(5000,()=>{
    console.log(`server running ${port}`)
})