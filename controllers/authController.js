const AuthModels = require('../models/authModel');

const AuthLogin = (req,res) => {
   return res.render('Login');
// console.log('hello');
}

//register page
const AuthRegister = (req,res) => {
   return res.render('Register');
}

//inserting data to database
const RegisterUsers = async(req,res) => {
   try{
      const {name,email,password,confirmpsw} = req.body;
      // const hashedPassword = await bcrypt.hash(password, 10);
      await AuthModels.create({
         name:name,
         email:email,
         password:password,
         confirmpsw:confirmpsw
      });
      console.log(name,email);
      
      console.log("user registered successfully...");
      return res.redirect('Register');
   }catch(err){
      console.log(err);
      return false;
   }
}

//login user
const LoginUsers = (req,res) =>{
   return res.redirect('Dashboard');
}

const dashboard = (req,res) => {
       return res.render('Dashboard');
}
    

module.exports = {AuthLogin,dashboard,AuthRegister,RegisterUsers,LoginUsers};