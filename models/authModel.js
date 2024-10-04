const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})
const authUser = mongoose.model('user', authSchema);

module.exports = authUser; 


