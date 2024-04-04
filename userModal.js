const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phonenumber : Number,
    password : {
        type : String,
        required : true
    },
    token : {
        type : String
    }
});

module.exports = mongoose.model("user", userSchema)