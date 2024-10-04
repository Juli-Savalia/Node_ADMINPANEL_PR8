const express = require("express");
const app = express()
const port = 8000 ;
const connectDB = require("./config/db");
connectDB();
const path = require('path');

app.set('view engine','ejs');
app.use(express.urlencoded());//its a middleware that makes the data available in the req.body..

// app.use('/',express.static(path.join(__dirname,"public")));

app.use(express.static(path.join(__dirname, 'public')))//without this css wont be attached to your app..
// app.use('/uploads',express.static(path.join(__dirname,"uploads")));//used for the images

const passportLocal = require('./config/passportlocal')
const passport = require('passport');
const session = require('express-session');

app.use(session({
    secret : 'secret',
    resave : false,
    saveUninitialized : false,
    cookie : {
        maxAge : 1000*60*60*24*7
    }
}))

app.use(passport.initialize());
app.use(passport.session());
// app.use(passport.setUser);//we have to make 

app.use('/',require('./routes/indexRoute'))//main route and will always come after cookie..


app.listen(port,(err) =>{
    if(err) console.log(err);
    console.log(`Your Server has successfully started on the port:- ${port}`)
})
