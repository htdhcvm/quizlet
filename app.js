const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require('express-session');

const router = require("./routes");

const app = express();

app.set("view engine", "pug"); 

app.use("/css", express.static("assets/css"));
app.use("/js", express.static("assets/js"));
app.use("/img", express.static("assets/img"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const bcryptSalt = 10;


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1 * 1000 * 60 * 60
    }
}))


app.use('/', router);




app.listen(3000, () => {
    console.log(`Server was started on 3000 port`);
});
