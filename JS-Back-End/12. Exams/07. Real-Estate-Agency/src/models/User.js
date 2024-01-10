const { Schema, model } = require('mongoose');

const schema = new Schema({
    hashedPassword: { type: String, required: true },
    username: { type: String, required: true },
    name: { type: String, required: true }
});

module.exports = model('User', schema);