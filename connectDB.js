const mongoose=require('mongoose');


const connectDB=()=>
    {
        mongoose.connect('mongodb://localhost:27017/url-shortner')
.then(()=>{
    console.log('mongodb is connected')
})
.catch((err)=>{
    console.log(err)
})
    }


module.exports=connectDB;