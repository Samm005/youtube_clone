import mongoose from "mongoose";

const ChannelSchema = new mongoose.Schema({
    channelName:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        default: ""
    },
    banner: {
      type: String,
      default: ""
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    subscribers: {
      type: Number,
      default: 0
    },
    subscribedUsers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
}]
},
  { timestamps: true }
);

export default mongoose.model("Channel", ChannelSchema);