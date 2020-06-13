const connection  = require("../DbConnection");

class User {

    addUser( data ) {
        return new Promise( (resolve, reject ) => {
            connection.query(` insert into User( login, password ) values( ?, ?)`, [ data.login, data.hash], (err, res) => {
                if (err) return reject(err);
                resolve(true);
            })
        })
    }

    getOnLogin( login ) { 
        return new Promise( (resolve, reject ) => {
            connection.query(`select * from User where login = ?`, [login], (err, res) => {
                if (err) return reject(err);
                resolve(res);
            })
        })
    } 
}

module.exports = new User();