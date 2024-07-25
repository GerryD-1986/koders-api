const mongoose = require('mongoose');

const modelName = 'koders';

const schema = new mongoose.Schema({
    firstName: { //Reglas de mi atributo
        type: String,
        required: true,//Indicar que este campo es requerido
        minLength: 2,
        maxLength: 100 //Condición del tamaño del campo
    },
    lastName: {
        type: String,
        required: false,
        maxLength: 100
    },
    email: {
        type: String,
        required: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    },
    password:{
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: false
    },
    generation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "generations",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const model = mongoose.model(modelName, schema);

module.exports = model;