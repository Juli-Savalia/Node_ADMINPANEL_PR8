const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    status :{
        type:String,
        default : 'Active'
    }
})
const categories = mongoose.model('category', categorySchema);

module.exports = categories; 


