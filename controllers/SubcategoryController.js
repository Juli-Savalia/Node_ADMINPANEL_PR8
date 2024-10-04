const SubCategoryModel = require('../models/subcategoryModel');
const CategoryModel = require('../models/categoryModel')
//add subcategory page 
const AddSubCategoryPage = async(req,res) => {
    try{
        let category = await CategoryModel.find({});
        console.log(category);
        console.log('hii');
        
        return res.render('subcategory/AddSubCategory',{
            category : category
        });
    }
    catch(err)
    {
        console.log(err);
        return false;
    }
} 

//add  subcategory post 
const AddSubCategoryPost = async(req,res) => {
    try{
        const {category,subcategory} = req.body;
        console.log(req.body,"hey");
        
        await SubCategoryModel.create({
            categoryId : category,
            subcategory : subcategory
        })
        return res.redirect('/subcategory/add');
    }catch(err){
        console.log(err);
        return false;
        
    }
}

//view sub cat page
const ViewSubCategoryPage =async (req,res) => {
    try {
        const showsubCategory = await SubCategoryModel.find({});
        return res.render('subcategory/ViewSubCategoryPage',{
            showsubCategory : showsubCategory
        });
        
    } catch (error) {
        consol.log(error)
        return false;
    }
}

//delete
const DeleteSubCategory = async(req,res) => {
    try {
        const id = req.query.id;
         await SubCategoryModel.findByIdAndDelete(id);
          // Re-fetch the subcategories to pass to the view after deletion or joining table
        const showsubCategory = await SubCategoryModel.find({}).populate('categoryId');
        
        return res.render('subcategory/ViewSubCategoryPage', {
            showsubCategory: showsubCategory // Pass the subcategories to the view
        });
    } catch (error) {
        console.log(error);
        return false;
        
    }
}
module.exports = {AddSubCategoryPage,AddSubCategoryPost,ViewSubCategoryPage,DeleteSubCategory};