const express = require('express');
const { AddSubCategoryPage, AddSubCategoryPost, ViewSubCategoryPage, Joinsubandcat, DeleteSubCategory } = require('../controllers/SubcategoryController');
const routes = express.Router();

routes.get('/add', AddSubCategoryPage);//to get add sub category page
routes.post('/AddSubCategoryPost',AddSubCategoryPost)//add sub category post
routes.get('/ViewSubCategoryPage',ViewSubCategoryPage)
routes.get('/del',DeleteSubCategory)
module.exports = routes;