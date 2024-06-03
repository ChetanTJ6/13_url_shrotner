const express=require('express');
const app=express();
const PORT=8000;

const connectDB=require('./connectDB')


//routes
const urlshort=require('./routes/shortURL')
const staticRoute=require('./routes/staticRouter')






const path=require('path')


app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'))

connectDB();

app.use(express.json())// ---> this is required while parsing the body with JSON payload
app.use(express.urlencoded({extended:false})) //---> for the form data






app.use('/shortUrl',urlshort);
app.use('/',staticRoute);





app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})

