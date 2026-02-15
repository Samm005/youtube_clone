import User from "../models/User.js";

export const update=async (req,res,next)=>{
    if(req.params.id === req.user.id){
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true});
            res.status(200).json(updatedUser);
        }
        catch(err){
            next(err);
        }
    }else{
        return res.status(403).json("You can update only your account!");
    }
};

export const Delete=async (req,res,next)=>{
    if(req.params.id === req.user.id){
        try{
             await User.findByIdAndDelete(req.params.id,{
            });
            res.status(200).json("User has been deleted!");
        }
        catch(err){
            next(err);
        }
    }else{
        return res.status(403).json("You can delete only your account!");
    }
};

export const getUser=async (req,res,next)=>{
     try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
        }
        catch(err){
            next(err);
        }
};

export const likeVideo=async (req,res,next)=>{
     try{
        }
        catch(err){
            next(err);
        }
};

export const dislikeVideo=async (req,res,next)=>{
     try{
        }
        catch(err){
            next(err);
        }
};