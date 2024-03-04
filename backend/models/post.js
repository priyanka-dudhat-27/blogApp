const mongoose=require('mongoose')
const postSchema=mongoose.Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'users',
    },
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        default:'https://th.bing.com/th/id/OIP.PIgZyCxV4cTqmwN7HcwOsgAAAA?rs=1&pid=ImgDetMain'
    }
},{
    timestamps:true,
})

const postModel=mongoose.model('posts',userSchema);
module.exports = postModel;