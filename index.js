const express=require('express');
const app=express();
const PORT=8000;
const path=require('path')
const connectDB=require('./connectDB')


//routes
const urlshort=require('./routes/shortURL')
const staticRoute=require('./routes/staticRouter')


//MongoDB connect
connectDB();

app.use(express.json())// ---> this is required while parsing the body with JSON payload
app.use(express.urlencoded({extended:false})) //---> for the form data


//url route
app.use('/shortUrl',urlshort);





app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})

