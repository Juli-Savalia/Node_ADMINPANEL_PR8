const express = require('express');
const { addextrasubcatPage, addsubandcat, viewextrasubcat } = require('../controllers/extrasubcatController');
const { ViewSubCategoryPage } = require('../controllers/SubcategoryController');
const routes = express.Router();

routes.get('/addpage',addextrasubcatPage);// to get addextrasub page 
routes.post('/add',addsubandcat);//to post data
routes.get('/viewextrasub',viewextrasubcat)//for view

module.exports = routes;