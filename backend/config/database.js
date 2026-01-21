const mongoose = require("mongoose");
require("dotenv").config();

exports.DbConnect=()=>{
    mongoose.connect(process.env.URI)
    .then(()=>{
        console.log("Database connected successfully");
    })
    .catch((err)=>{
        console.log("Db connection failed");
        console.error(err.message);
        process.exit(1);
    })
}


