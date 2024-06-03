const express=require('express')

const {generateShortid , redirectURL,analytics}=require('../controller/shortURL')

const router=express.Router();

router.post('/',generateShortid);
router.get('/:shorturl',redirectURL)
router.get('/analytics/:shorturl',analytics)

module.exports=router;