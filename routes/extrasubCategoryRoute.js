const express = require('express');
const { addextrasubcatPage, viewextrasubcat, postextrasubcat, } = require('../controllers/extrasubcatController');
const routes = express.Router();

routes.get('/addpage',addextrasubcatPage);// to get addextrasub page 
routes.post('/add',postextrasubcat);//to post data
routes.get('/viewextrasub',viewextrasubcat)//for view

module.exports = routes;