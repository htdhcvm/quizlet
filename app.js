const path = require("path");
const express = require("express");


const app = express();

app.set("view engine", "pug"); 


app.use("/css", express.static("assets/css"));
app.use("/js", express.static("assets/js"));
app.use("/img", express.static("assets/img"));

app.get("/", (req, res) => {
    res.render("main", {
        dataHead : {
            title : "Flouheforst | Quizlet ",
            src : "/css/main.css",
            js : [
                "regAuth/Authorization.js",
                "regAuth/Registration.js",
                "modal/ModalControl.js",
                "modal/Auth.js",
                "modal/Reg.js",
                "modal/CreateModal.js",
                "Combined.js"
            ]
        }
    })
});


app.listen(3000, () => {
    console.log(`Server was started on 3000 port`);
});


