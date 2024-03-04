const express=require('express');
const app=express();
const dotenv=require('dotenv').config()
const port=process.env.Port || 3000
const dbConnection=require('./config/db')
const userRouter=require('./routes/user_routes')
const cors=require('cors')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/api/users',userRouter)

dbConnection();
app.listen(port,(err)=>{
    (err)?console.log('something wrong'):console.log(`server is running on port ${port}`)
})