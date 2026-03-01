import Video from "../models/Video.js";

export const addVideo=async (req,res,next)=>{
    const newVideo = new Video({userId:req.user.id,...req.body});
    try{
        const savedVideo = await newVideo.save();
        res.status(200).json(savedVideo);
    }catch(err){
        next(err);
    }
};

export const updateVideo=async (req,res,next)=>{
     try{
        const video = await Video.findById(req.params.id);
        if(!video) return res.status(404).json("Video not found!");
        if(video.userId === req.user.id){
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true});
            res.status(200).json(updatedVideo);
        }
        else{
            res.status(403).json("You can update only your video!");
        }
    }catch(err){
        next(err);
    }
};

export const deleteVideo=async (req,res,next)=>{
     try{
        const video = await Video.findById(req.params.id);
        if(!video) return res.status(404).json("Video not found!");
        if(video.userId === req.user.id){
            const updatedVideo = await Video.findByIdAndDelete(req.params.id,);
            res.status(200).json("Video has been deleted!");
        }
        else{
            res.status(403).json("You can delete only your video!");
        }
    }catch(err){
        next(err);
    }
};

export const getVideo=async (req,res,next)=>{
     try{
        const video = await Video.findById(req.params.id);
        res.status(200).json(video);
    }catch(err){
        next(err);
    }
};