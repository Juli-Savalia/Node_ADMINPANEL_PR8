const CategoryModel = require("../models/categoryModel");

//to get category page
const AddCategoryPage = (req, res) => {
  return res.render("category/AddCategoryPage");
};

//to add category
const AddCategory = async (req, res) => {
  try {
    const categories = req.body.category;
    await CategoryModel.create({
      category: categories,
    });
    console.log("category added sucessfully..");

    return res.redirect("/category/AddCategoryPage");
  } catch (err) {
    console.log(err);
    return false;
  }
};

//view category

const ViewCategoryPage = async (req, res) => {
  try {
    const showCategory = await CategoryModel.find({});
    // console.log(showCategory);

    return res.render("category/ViewCategoryPage", {
      showCategory: showCategory,
    });
  } catch (err) {
    console.log(err);
    return false;
  }
};

//delete category

const DeleteCategory = async (req, res) => {
  try {
    const id = req.query.id;
    await CategoryModel.findByIdAndDelete(id);
    return res.redirect("/category/ViewCategoryPage");
  } catch (err) {
    console.log(err);
    return false;
  }
};

//edit category to bring single rec
const EditCategory = async(req,res) => {
    try{
        const id = req.query.id;
        let single = await CategoryModel.findById(id);
        console.log("hii");
        console.log(single);
        
        return res.render("category/EditCategoryPage",{
          single:single
        })
    }catch(err)
    {
        console.log(err);
        return false;   
        
    }
}

//to update the rec
const UpdateCategory = async(req,res) => {
  try{
    console.log("hi");
    
    const id = req.body.editid
    console.log(id);
    
    await CategoryModel.findByIdAndUpdate(id,{
      category : req.body.category //this category comes from the name from the input
    })
    return res.redirect('/category/ViewCategoryPage')
  }catch(Err)
  {
    console.log(Err);
    return false;
    
  }
}

module.exports = {
  AddCategoryPage,
  AddCategory,
  ViewCategoryPage,
  DeleteCategory,
  EditCategory,
  UpdateCategory
};
