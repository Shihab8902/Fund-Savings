const cors = require("cors");
const express = require("express");


const middlewarePackages = (app) => {
    app.use(cors());
    app.use(express.json());
}


module.exports = middlewarePackages