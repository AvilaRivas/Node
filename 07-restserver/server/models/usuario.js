const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const mongooseUniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE','USER_ROLE'],
    message: '{VALUE} no es un rol valido' 
}

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es necesario"]
    },
    email: {
        type: String,
        required: [true, "El correo es necesario"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "La contrase;a es obligatoria"]
    },
    img: {
        type: String,
        required: false,
        default:""
    },
    role: {
        type: String,
        default: "USER_ROLE",
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}
usuarioSchema.plugin(mongooseUniqueValidator, { message: '{PATH} debe ser unico'});

module.exports = mongoose.model('Usuario', usuarioSchema)