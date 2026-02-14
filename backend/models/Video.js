import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    userId: {
        type: String, 
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgURL: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    tags:{
        type: [String],
        default: []
    },
    likes: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
],
dislikes: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
]
},
{timestamps: true}
);

export default mongoose.model("Video", VideoSchema);