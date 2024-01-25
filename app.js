const express = require('express');
const bodyParser = require('body-parser'); // Corrected import
const { connection } = require('./config/db');
const {router} = require("./routes/routes")
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.get('/' , (req,res) => {
    res.send("Welcome To TaskManager");
})
app.use("/api",router);
app.listen(process.env.PORT, async () => { 
    try {
        await connection;
        console.log('Connected to DB');
        
    } catch (error) {
        console.log(error.message);
        console.log('No connection');
    }
    console.log(`server is running on port ${process.env.PORT}`);
    
})