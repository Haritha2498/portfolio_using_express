const express=require('express');
const app=express();

const path= require('path');

const port=3012;
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname,'haritha_portfolio.html'))
})

app.listen(port,()=>{
    console.log("service running on port : "+port)
})