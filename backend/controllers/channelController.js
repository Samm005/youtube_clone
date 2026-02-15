import Channel from "../models/Channel";

export const Suscribe=async (req,res,next)=>{
    try{
        await Channel.findByIdAndUpdate(req.params.id,{
            $push:{subscribers:req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers:1}
        })
        res.status(200).json("Subscription was successful!");
    }
    catch(err){
        next(err);
    }
};

export const UnSuscribe=async (req,res,next)=>{
    try{
        await Channel.findByIdAndUpdate(req.params.id,{
            $pull:{subscribers:req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers:-1}
        })
        res.status(200).json("Unsubscription was successful!");
    }
    catch(err){
        next(err);
    }
};