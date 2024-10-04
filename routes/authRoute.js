const express = require('express');
const routes = express.Router();

const {AuthLogin, dashboard, AuthRegister, RegisterUsers, LoginUsers} = require('../controllers/authController');

routes.get('/',AuthLogin); //to get login page
routes.get('/register',AuthRegister);// to get register page
routes.post('/registerusers',RegisterUsers);//to post the data of registered users
routes.post('/loginusers',LoginUsers);//login users
routes.get('/dashboard',dashboard);// to get dashboard page


module.exports = routes;