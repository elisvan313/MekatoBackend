
const express = require('express');
const app = express();

app.use(express.json())



app.get('/personas',async (req,res) => {
console.log(req.query)
    res.status(200).json({message: 'Success'})    
});
const Rmission=require('./missions')

app.use('/missions',Rmission)

app.use(async(req,res)=>{
    res.status(404).json({message:"not found"})
});
app.listen(8080);