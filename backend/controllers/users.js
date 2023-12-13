
import mysql from 'mysql2';

//create a connection to the database
const db = mysql.createPool({
    host: 'db2',
    port: `3306`,
    user: '506team',
    password: 'beepboop',
    database: 'beepboop_db'
});


//create a post request to add a user to the database
export const createUser = (req, res) => {
    //if user.email is already in the table users in db, then return an error
    //if user.email is not in the table users in db, then add the user to the table users in db
    //write a sql query to check if user.email is in the table 'users'
    const user = req.body;
    const sqlCheck = `SELECT * FROM users WHERE email = '${user.email}';`;
    db.query(sqlCheck, (err, result) => {
        if (result.length > 0) {
            res.status(400);
            res.send("this email is already in use");
            
        }
        else{
            const sqlInsert = `INSERT INTO users (firstName, lastName, email, password) VALUES ('${user.firstName}', '${user.lastName}', '${user.email}', '${user.password}');`;
            db.query(sqlInsert, (err, result) => {
                console.log(err);
                
                res.send("user added to the database");
                
            });        
        }
    }); 
    
    
}

//create a get request to get a specific user from the user table in the sql db based on their email
export const getUser = (req, res) => {
    const { id } = req.params;
    const sqlSelect = `SELECT * FROM users WHERE email = '${id}';`;
    db.query(sqlSelect, (err, result) => {
        if(result.length === 0){
            res.status(400);
            res.send("There is no user with this email");
        }
        else{
            res.send(result);
        }

    });


}

//create a get request to get all the users in the database
export const getUsers = (req, res) => {
    const sqlSelect = `SELECT * FROM users;`;
    db.query(sqlSelect, (err, result) => {
        console.log(err);
        if(result.length === 0){
            res.status(400);
            res.send("There are no users in the database");
        }
        else{
            res.send(result);
        }
    });
}

//create a delete request to delete a user from the database based on their email
export const deleteUser = (req, res) => {
    //first check to see if the user is in the db
    //if they are, then delete them
    //if they are not, then return an error
    const { id } = req.params;

    const sqlCheck = `SELECT * FROM users WHERE email = '${id}';`;
    db.query(sqlCheck, (err, result) => {
        if (result.length === 0) {
            res.status(400);
            res.send("There is no user with this email");
            
        }
        else{

            const sqlDelete = `DELETE FROM users WHERE email = '${id}';`;
            db.query(sqlDelete, (err, result) => {
                console.log(err);
                res.send(`User with the email ${id} has been deleted.`);
            });

        }




    }); 
}


//create a patch request to update a user in the database based on their email, only their password will be updated
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { password } = req.body;

    const sqlCheck = `SELECT * FROM users WHERE email = '${id}';`;
    db.query(sqlCheck, (err, result) => {
        //making sure user actually exists in the database
            const sqlUpdate = `UPDATE users SET password = '${password}' WHERE email = '${id}';`;
            //get existing password for user with email id
            const sqlSelect = `SELECT password FROM users WHERE email = '${id}';`;
            db.query(sqlSelect, (err, result) => {
                //if the user does not exist, then return an error
                if (result.length === 0) {
                    res.status(400);
                    res.send("There is no user with this email");
                }
                //if the new password is the same as the old password, then return an error
                else if(result[0].password === password){
                    
                        res.status(400);
                        res.send("This is the same password as the old password");
                }
                //if the new password is not the same as the old password, then update the password
                else{
                    db.query(sqlUpdate, (err, result) => {
                        console.log(err);
                        res.send(`User with the email ${id} has been updated.`);
                    });
                }
            });


        
    }); 

}