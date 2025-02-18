require('dotenv').config();
const express=require('express');
const ConnectDB = require('./db/ConnectDB');
const router = require('./Route/ContactRouter');

const cors=require("cors");
const app=express();

app.use(express.json());
app.use(cors());

//decide port
const PORT=process.env.PORT ||5004;

//Router
app.use("/api/contact",router)

ConnectDB().then(()=>{
    console.log("DB Connected")
    app.listen(PORT,()=>{
        console.log(`server is running at PORT ${PORT}`)
    })
})

