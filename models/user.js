const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UserSchema = new Schema({
    foto: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    editable: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('User', UserSchema)