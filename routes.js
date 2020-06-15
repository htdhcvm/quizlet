const express = require("express");

const User = require("./modal/User/User");
const bcrypt = require("bcrypt");



const router = express.Router();


router.use("/", (req, res, next) => {
    console.log("/")
})


router.use("/qwe", (req, res, next) => {
    console.log("qwe")
})


router.use("/ewq", (req, res, next) => {
    console.log("ewq")
    
})
// router.use("/", (req, res, next) => {
//     if( req.session.user ) {
//         console.log(req.session.user);
//         console.log("tut 1")
//         res.render("main", {
//             dataHead : {
//                 title : "Flouheforst | Quizlet ",
//                 src : "/css/main.css",
//                 js : [
//                     "regAuth/Authorization.js",
//                     "regAuth/Registration.js",
//                     "modal/ModalControl.js",
//                     "modal/Auth.js",
//                     "modal/Reg.js",
//                     "modal/CreateModal.js",
//                     "Combined.js"
//                 ],
//                 data : req.session.user
//             }
//         })
//         next();
//     } else {
//         next();
//     }
// })

router.get("/", (req, res) => {
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

router.post("/registration", (req, res) => {
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

router.post("/authorization", (req, res) => {
    let { login, password } = req.body.values;

    console.log(login);
    User.getOnLogin(login)
        .then(
            ( users ) => {
                users.forEach( item => {
                    bcrypt.compare(password, item.Password, function(err, result) {
                        if (err) console.log(err);
                        if ( result ) {
                            req.session.user = {
                                id : item.id,
                                login: item.login,
                                status : true
                            }

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

router.use("/modules", (req, res, next) => {
    if( req.session.user ) {
        console.log(req.session.user);
        console.log("tut 2")
        res.render("modules", {
            dataHead : {
                title : `${req.session.user.login} | Quizlet `,
                src : "/css/modules.css",
                js : [],
                data : req.session.user
            }
        })
    } else {
        next();
    }
})

router.get("/modules", (req, res) => {
    res.send("M")
});

router.get("/modules/create", (req, res) => {

});


module.exports = router;