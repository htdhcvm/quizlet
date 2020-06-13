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
}

module.exports = new User();