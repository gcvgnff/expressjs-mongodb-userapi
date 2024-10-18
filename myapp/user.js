// user.js
const mongoose = require('./db'); // Assurez-vous que db.js est correctement importé

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
