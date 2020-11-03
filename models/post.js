const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //includes the array of ids of the comments in this post Schema itself
    Comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]

},{
    timestamps: true
});
const Post = mongoose.model('Post',postSchema);
module.exports=Post;