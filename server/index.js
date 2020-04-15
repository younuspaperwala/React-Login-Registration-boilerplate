const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {User} =require('./models/user');
const config = require('./config/key');
const {auth} = require('./middleware/auth')
mongoose.connect(config.mongoURI,{
useUnifiedTopology:true,
useNewUrlParser:true

}).then(()=> {
    console.log("Db connected")
}).catch((err)=>{
    console.log(err)
});


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());


app.get('/api/users/auth',auth,(req,res)=>{
    res.status(200).json({
        _id:req._id,
        isAuth:true,
        email:req.User.email,
        name:req.User.name,
        lastname:req.User.lastname,
        role:req.User.role
    })
})
app.post('/api/users/register',(req,res)=>{
const user = new User(req.body)

user.save((err,userData)=>{
    if(err) return res.json({success:false,err})
    else{
        return res.status(200).json(
            {
                success:true,
                userData:userData
            }
        )
    }
})

})

app.get('/',(req,res)=> {
res.json("Hello MAn");
});


app.post('/api/users/login',(req,res)=> {
    //find email in db

    User.findOne({email:req.body.email},(err,user)=> {
        if(!user)
        {
            //if email not found
            return res.json({
                LoginSuccess:false,
                message:"email is incorrect",
            })

        }

    //if email found take the password and compare
    user.comparePassword(req.body.password,(err,isMatch)=>{
        if(err) return res.json({err:err})
        if(!isMatch)
        {
            console.log(req.body)

            return res.json({
                LoginSuccess:false,
                message:"email or password is incorrect"
            })

        }
      
    })

    //generate token
    user.generateToken((err,user)=>{
        if(err)
        {
            return res.status(400).send(err)

        }
        else{
            return res.cookie("x_auth",user.token)
            .status(200)
            .json(
                {

                    LoginSuccess:true
                }
            )

        }

    });


    });




})
 

app.get('/api/users/logout',auth,(req,res)=>{
    User.findOneAndUpdate({_id:req.User._id},{token:""},(err,doc)=>{
        if(err) return res.json({success:false,err:err})
        return res.status(200).send({
            success:true
        })
    })
})



const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Listening on the Port: ${port}`)
});
