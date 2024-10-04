const mongoose = require('mongoose');

const Extrasubcat = mongoose.Schema({
    categoryId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'category'
    },
    subcategoryId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'subcategory'
    }
    ,
    extrasubcategory : {
        type: String,
        required : true 
    },
    status : {
        type:String,
        default : 'active'
    }
})

const Extrasubcategory = mongoose.model('extrasub',Extrasubcat);
module.exports = Extrasubcategory;