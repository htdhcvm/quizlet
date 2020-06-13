const mysql = require("mysql2");

class DbConnection { 
    constructor() {
        this.instance;
    }

    getInstance() {
        if(!this.instance) {
            return mysql.createConnection({
                host : "localhost",
                user : "root",
                password : "root",
                database : "quizlet"
            });
        }

        return this.instance;
    }
}


module.exports = new DbConnection().getInstance();