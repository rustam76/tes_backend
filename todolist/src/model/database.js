
import mysql from "mysql";
import"dotenv/config";

const db = mysql.createConnection({
     host: process.env.HOST,
     user: process.env.USER,
     password: process.env.PASSWORD,
     database: process.env.DATABASE
})

db.connect( function(err) {
    if (err) {
        return `ini Erorr :${err}`
    }
    console.log("connected");    
})

export default db;