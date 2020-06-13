const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const User = require("./modal/User/User");

const app = express();

app.set("view engine", "pug"); 

app.use("/css", express.static("assets/css"));
app.use("/js", express.static("assets/js"));
app.use("/img", express.static("assets/img"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const bcryptSalt = 10;


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

app.post("/registration", (req, res) => {
    const registrationValues = req.body.values;

    new Promise( (resolve, reject ) => {
        bcrypt.hash( registrationValues.password, bcryptSalt, (err, hash) => {
            if ( err ) return reject(err);
            resolve(hash);
        })
    }).then(
        (hash)=>{
            return hash;
        },
        (err) => {
            res.send({
                text : "Что-то не так",
                status : false
            });
        }
    ).then( (hash)=> {
        new Promise( (resolve, reject) => {
            User.addUser({
                login : registrationValues.login,
                hash : hash
            }).then( 
                ( status ) => {
                    res.send({
                        text : "Регистрация прошла успешно",
                        status : true
                    });
                },
                (err) => {
                    reject(err);
                    res.send({
                        text : "Что-то не так",
                        status : false
                    });
                }
            );
        })
    })
});

app.post("/authorization", (req, res) => {
    let { login, password } = req.body.values;

    User.getOnLogin(login)
        .then(
            ( users ) => {
                users.forEach( item => {
                    bcrypt.compare(password, item.Password, function(err, result) {
                        if (err) console.log(err);
                        
                        if ( result ) {
                            console.log(item.login, item.Password)
                            res.send({
                                text : "Авторизация прошла успешно",
                                status : true
                            })
                        }
                    });
                })
            },
            (err)=> {
                console.log(err);
            }
        )

})



app.listen(3000, () => {
    console.log(`Server was started on 3000 port`);
});
