const { Schema, model } = require('mongoose')

const User = new Schema({
    rol: {
        type: String,
        uppercase: true,
        required: true,
        enum: ['CLIENT', 'ADMIN'],
        default: 'CLIENT'
    },
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

User.set('toJSON', {
    transform: (_, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    },
})

const UserModel = model('users', User)

module.exports = { UserModel }