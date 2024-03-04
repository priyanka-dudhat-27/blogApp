const mongoose=require('mongoose')

const dbConnection = async () => {
    try{
        mongoose.connect(process.env.MONGODB_URL)
        console.log("db is connected")
    }
    catch(err){
        console.log(err)
    }
};

module.exports=dbConnection;

