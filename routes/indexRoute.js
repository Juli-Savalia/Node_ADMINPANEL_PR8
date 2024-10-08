const express = require('express');
const routes = express.Router();

routes.use('/',require('./authRoute'));
routes.use('/category',require('./categoryRoute'));
routes.use('/subcategory',require('./subcategoryRoute'));
routes.use('/extrasub',require('./extrasubCategoryRoute'));

module.exports = routes;