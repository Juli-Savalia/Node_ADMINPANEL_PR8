const extrsubcatModel = require('../models/extrasubcategoryModel');
const CategoryModel = require('../models/categoryModel');
const SubCategoryModel = require('../models/subcategoryModel');

//to add extrasubaddcat page
const addextrasubcatPage = (req,res) => {
    res.render('extrasub/AddextrasubCatPage');
}

//to view data 
const postextrasubcat = async(req,res) => {
    try {
        const {category,subcategory,extrasubcategory} = req.body;
        await extrsubcatModel.create({
            categoryId : category,
            subcategoryId : subcategory,
            extrasubcategory : extrasubcategory
        })
        return res.redirect('/extrasubcategory/viewpage');
    } catch (error) {
        console.log(error);
        return false;   
        
    }
}

//add sub and category 
const addsubandcat = async(req,res) => {
    try{
        const cat = await CategoryModel.find({});
        console.log(cat,"hi cat");
        
        const subcat = await SubCategoryModel.find({});
        return res.render("extrasub/AddextrasubCatPage",{
            category : cat,
            subcategory :subcat
        })
    }catch(err)
    {
        console.log(err);
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

module.exports = {addextrasubcatPage,postextrasubcat,viewextrasubcat,addsubandcat}