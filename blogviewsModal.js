const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    blog : {
        type : Number,
        required : true
    },
    views : {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model("blogviews", userSchema)