const mongoose = require('mongoose')

const UserModel = mongoose.Schema({
    userName:{type: String, required: true,minLength:2},
    password: { type: String,required:true,minLength:6 },
    role: {
        type: String,
        enum: ['admin', 'developer', 'support'],
        required: true
    },
}, { timestamps: true });
module.exports = mongoose.model("User",UserModel)