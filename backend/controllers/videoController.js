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
        const video = await video.findById(req.params.id);
        if(!video) return res.status(404).json("Video not found!");
        if(video.userId === req.user.id){
            const updatedVideo = await video.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true});
            res.status(200).json(updatedVideo);
        }
    }catch(err){
        next(err);
    }
};

export const deleteVideo=async (req,res,next)=>{
     try{
        
    }catch(err){
        next(err);
    }
};

export const getVideo=async (req,res,next)=>{
     try{
        
    }catch(err){
        next(err);
    }
};