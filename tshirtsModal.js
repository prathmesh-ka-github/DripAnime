const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    productname : {
        type : String,
        required : true
    },
    productid : {
        type : Number,
        required : true
    },
    productsizes : {
        type : String,
        required : true
    },
    producttags : {
        type : String,
        required : true
    },
    productcolors : {
        type : String,
        required : true
    },
    producturl : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("tshirts", userSchema)