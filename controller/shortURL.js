const shortid=require('shortid')
const URL=require('../model/shortURL')


const generateShortid = async (req,res)=>{
        const  body=req.body;

       if(!body.url) return res.status(400).json({
        err:'url is required'
       })

       const shortID=shortid();

       await URL.create({
        shortId:shortID,
        redirectId:body.url,
        visitHistoty:[],
       })

    res.status(200).json({
        id:shortID
    })

}

const redirectURL=async (req,res)=>{

    const shorturl=req.params.shorturl;
   const url=await URL.findOneAndUpdate({shortId:shorturl},
    {$push:{
        visitHistoty:{
            timestamp:Date.now()
        }
    }}
   )

   

  
    console.log(url.redirectId)

   res.redirect(url.redirectId);


}

const analytics=async (req,res)=>{
    const shorturl=req.params.shorturl;

    const result=await URL.findOne({shortId:shorturl});
    // res.send(result)
    res.json({
        clicks:result.visitHistoty.length,
        analytics:result.visitHistoty
    })
   }
   






module.exports={generateShortid,redirectURL,analytics}