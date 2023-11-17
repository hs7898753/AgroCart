const express=require("express");
const bodyParser=require("body-parser");
const session= require("express-session");
const passport= require("passport");
const {createProduct }= require("./controllers/product");
const productsRouter=require("./routes/products");
const categoryRouter=require("./routes/category");
const userRouter=require("./routes/user");
const authRouter=require("./routes/auth");
const cartRouter=require("./routes/cart");
const orderRouter=require("./routes/order");
const LocalStrategy=require("passport-local").Strategy;
const User=require("./model/User");
const crypto=require("crypto");
const { sanitizeUser, isAuth } = require("./services/common");
const app=express();
require("./db/connection");
const port=5000;


// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
    secret:"keyboard cat",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.authenticate("session"));


app.use("/products",isAuth,productsRouter.router);
app.use("/categories",categoryRouter.router);
app.use("/user",userRouter.router);
app.use("/auth",authRouter.router);
app.use("/cart",cartRouter.router)
app.use("/order",orderRouter.router);

//passport strategies 

passport.use(new LocalStrategy(
    async function (username,password,done){
        try{

            const user =await User.findOne({email:username}).exec();
            if(!user)
            {  
                done(null,false,{message:"no user exist" });
            }
            crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256',async function(err, hashedPassword) {
               
               if (!crypto.timingSafeEqual(user.password, hashedPassword)) {
                   return done(null,false,{message:"invalid credentials"});
                   
                } 
                else{
                    done(null,sanitizeUser(user));
                }

            })
            // console.log({user});
          
       }
       catch(e){
               done(e);
       }
       
    }
));

//this create session variable req.user on being called from calllbacks
passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      
      return cb(null, {id:user.id,role:user.role});
    });
  });
  
//this changes session variable req.user on being called from authorized request
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null,user);
    });
  });

 


app.get("/",(req,res)=>{
    res.send("hello how r u");
})



app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})