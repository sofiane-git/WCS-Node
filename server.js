// const express = require("express");
// const mongoose = require("mongoose");
// const WilderModel = require("./models/Wilder");
// const app = express();

// // database
// mongoose
//     .connect("mongodb://127.0.0.1:27017/wilderdb", {
//         autoIndex: true,
//     })
//     .then (() => console.log("Connected to DB"))
//     .catch((err) => console.log(err));

// app.get("/", (req, res) => {
//     res.send("Hello World");
//     // test a wilder connection
//     WilderModel.init().then(() => {
//         const firstWilder = new WilderModel({
//             name: "First Wilder",
//             city: "San Francisco",
//             skills: [
//                 { title: "HTML", votes: 10 },
//                 { title: "React", votes: 5 },
//             ],
//         });
//         firstWilder
//             .save()
//             .then((res) => {
//                 console.log("success:", res);
//             })
//             .catch((err) => {
//                 console.log("error:", err);
//             });
//     })
// });

// //Start Server
// app.listen(3000, () => console.log("Server started on 3000"))

const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Database
mongoose
    .connect('mongodb://127.0.0.1:27017/wilderdb', {
        autoIndex: true,
    })
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));

//Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

//Controllers
const WilderController = require('./controllers/wilders')

//Routes
app.get("/", (req, res) => {
    res.send("Hello World");
})
app.post("/api/wilder", WilderController.create)
app.post("/api/wilder", WilderController.update)
app.get("/api/wilder", WilderController.retrieve)
app.delete("/api/wilder", WilderController.delete)

//Start Server
app.listen(3000, () => console.log("Server started on 3000"))