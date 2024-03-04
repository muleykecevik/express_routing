"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

//const express = require("express");
//const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

const router = require('express').Router() //url yonetimi yapabilecegimiz bir router

// router.get('/', (req, res) => res.send({ message: "Home Area" }))
// router.get('/about', (req, res) => res.send({ message: "About Area" }))
// router.get('/user/:id', (req, res) => res.send({ message: req.params.id }))

//? router.route()
router.route('/')
    .get((req, res) => res.send({ message: "get" }))
    .post((req, res) => res.send({ message: "post" }))
    .put((req, res) => res.send({ message: "put" }))
    .delete((req, res) => res.send({ message: "delete" }))


module.exports = router

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));