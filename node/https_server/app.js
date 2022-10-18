const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/Passport", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Uspesno povezivanje na BP"))
    .catch((err) => console.log("Neuspesno povezivanje na BP:", err));

const Routes = require("./routes/router.js");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public", "css")));

app.use("/", Routes);

app.use(function (req, res, next) {
    const err = new Error("Pokušali ste da učitate stranicu koja ne postoji: " + req.url);
    err.status = 404;

    next(err);
});

// eslint-disable-next-line no-unused-vars
app.use(function (error, req, res, next) {
    console.error(error.stack);

    const statusCode = error.status || 500;
    res.status(statusCode).json({
        errorMessage: error.message,
        errorCode: statusCode,
    });
});

app.get('/', (req,res)=>{
    res.send("Hello from express server.")
})

module.exports = app;