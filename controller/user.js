const User=require('../model/user')


const handleUserSignup=async (req,res)=>{
    const {user,password,name}=req.body;

    await User.create({
        user,
        password,
        email
    })

    return res.render('home');
}


module.exports={handleUserSignup};    