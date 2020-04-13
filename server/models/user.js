const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRound = 10;
const jwt = require('jsonwebtoken');
const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            maxlength:50
        },
        email:{
            type:String,
            trim:true,
            unique:1
        },
        password:{
            type:String,
            minlength:5
        },
        lastname: {
            type:String,
            maxlength:50
        },
        role: {
            type:Number,
            default:0
        },
        token: {
            type:String
        },
        tokenExp:{
            type:Number
        }
    }
)

userSchema.pre('save',function(next){
    var user = this;
    console.log("user: "+JSON.stringify(user))
    if(user.isModified('password'))
    {

    bcrypt.genSalt(saltRound,function(err,salt) {
        if(err) return next(err);
        console.log(salt)

        bcrypt.hash(user.password,salt,function(err,hash){
            if(err)
            {
                console.log("pass: "+JSON.stringify(user))

                return next(err)}
            else{
                console.log("hash: "+user.password)

                user.password=hash
                next()
            }
          
        })
    } )
    }
    else{
        next();
    }
})


userSchema.methods.comparePassword=function(plainPassword,callBackFunc){
    console.log(plainPassword+" plain")
    console.log(this.password+" this.password")
    bcrypt.compare(plainPassword,this.password,(err,isMatch)=>{
        if(err) return callBackFunc(err);
        else return callBackFunc(null,true);
    })
}

userSchema.methods.generateToken= function(cb){
    var user = this;
    var token = jwt.sign(user._id.toString(16),'secret')

    user.token = token;
    user.save((err,user)=> {
        if(err)return cb(err)
        cb(null,user);

    })
}



userSchema.statics.findByToken = function(token,cb){
    var user = this;

    jwt.verify(token,'secret',function(err,decode){
        user.findOne({"_id":decode,"token":token},function(err,user){
            if(err) return cb(err)
            cb(null,user);
        })
    })

}
const User = mongoose.model('User',userSchema)
module.exports={User}