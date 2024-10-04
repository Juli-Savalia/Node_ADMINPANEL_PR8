const extrsubcatModel = require('../models/extrasubcategoryModel');
const CategoryModel = require('../models/categoryModel');
const SubCategoryModel = require('../models/subcategoryModel');

//to add extrasubaddcat page
const addextrasubcatPage = async(req,res) => {
       try{
        const category = await CategoryModel.find({});
        console.log(category,"hi cat");
        
        const subcategory = await SubCategoryModel.find({});
    res.render('extrasub/AddextrasubCatPage',{
        category:category,
        subcategory:subcategory
    });
       
    }catch(err)
    {
        console.log(err);
        return false;
    }
}


//to post data in mongo
const postextrasubcat = async(req,res) => {
    try {
        const {category,subcategory,extrasubcategory} = req.body;
        console.log(req.body);
        
        await extrsubcatModel.create({
            categoryId : category,
            subcategoryId : subcategory,
            extrasubcategory : extrasubcategory
        })
        return res.redirect('/extrasub/addpage');
    } catch (error) {
        console.log(error);
        return false;   
        
    }
}
//for view
const viewextrasubcat = async(req,res) => {                  
    try {
        const extrasubcat = await extrsubcatModel.find().populate('categoryId').populate('subcategoryId');
        res.render('extrasub/ViewextrasubCatPage',{
            extrasubcat : extrasubcat
        })
    }
    catch(err)
    {
        console.log(err);
        return false;
    }
}

module.exports = {addextrasubcatPage,postextrasubcat,viewextrasubcat}