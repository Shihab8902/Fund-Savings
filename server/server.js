require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const applyMiddlewares = require("./middlewares");
const router = require("./apis");
const app = express();

const PORT = process.env.PORT || 9000;


//Middlewares
applyMiddlewares(app);


//Routes 
app.use(router);





//Database connection and listen to server
const run = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, { dbName: process.env.DB_NAME });
        console.log("Database connection established");
        app.listen(PORT, () => {
            console.log(`The server is running on http://localhost:${PORT}`)
        });
    }
    catch (error) {
        console.log("Database connection and server listening error:", error.message)
    }
}


run();






