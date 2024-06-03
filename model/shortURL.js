const mongoose=require('mongoose');


const urlSchema=new mongoose.Schema({
    shortId:{
       type:String,
       required:true,
    },
    redirectId:{
        type:String,
        required:true,
    },
    visitHistoty:[{
        timestamp:{
            type:Number,
        }
    }]
},{
    timestamps:true
})

const URL=mongoose.model('url',urlSchema);


module.exports=URL; 