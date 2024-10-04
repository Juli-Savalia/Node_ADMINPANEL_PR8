const express = require('express');
const {AddCategoryPage,AddCategory, ViewCategoryPage, DeleteCategory, EditCategory, UpdateCategory} = require('../controllers/categoryController');
const routes = express.Router();

routes.get('/AddCategoryPage',AddCategoryPage);//to get category page
routes.post('/addCat',AddCategory);//to insert data
routes.get('/ViewCategoryPage',ViewCategoryPage);//to view viewcategory page
routes.get('/deleteCategory',DeleteCategory);//for delete
routes.get('/EditCategory',EditCategory)//to edit category to bring single rec
routes.post('/updateCat',UpdateCategory)//to update category 
module.exports = routes;