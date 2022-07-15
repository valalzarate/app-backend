const mongoose = require('mongoose')

const user_schema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email:{
        type:String,
        required: true,
        min: 6,
        max: 1024
    },
    password:{
        type: String,
        required: true,
        min: 6
    }
})

const User = mongoose.model('users',user_schema)

module.exports = User