const mongoose = require('mongoose');

const subcategorySchema = mongoose.Schema({
    categoryId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    },
    subcategory : {
        type:String,
        required:true
    },
    status : {
        type : String,
        default : 'Active'
    }

})

const SubCategoryModel = mongoose.model('SubCategory',subcategorySchema);
module.exports = SubCategoryModel;