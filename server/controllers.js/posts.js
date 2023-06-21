import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js"

export const getposts= async (req,res)=>{
    try{
    const messages=await PostMessage.find();
    //  console.log(x)
     res.status(200).json(messages);
     }
    catch(err){
       res.status(404).json({message: err.message})
    }
}

export const createpost=async (req,res)=>{
    const post=req.body
    const newPost= new PostMessage(post)
   try{
     await newPost.save();

     res.status(201).json(newPost)
   }
   catch(err){
    res.status(409).json({message: err.message})
   }
}

export const updatepost= async(req,res)=>{
   const { id:_id }=req.params;
   const updatedpost=req.body;

   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with with that id');
  
   const post= await PostMessage.findByIdAndUpdate(_id,{...updatedpost, _id},{ new:true })
   res.status(201).send(post)

}

export const deletepost= async(req,res)=>{
   const { id }=req.params;

   if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with with that id');

   const post= await PostMessage.findByIdAndRemove(id)
   res.json({message: "Post deleted!"})
}

export const likePost = async(req,res)=>{
   const { id:_id }= req.params;
   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with with that id');
   const post = await PostMessage.findById(_id)
   const updatedpost=await PostMessage.findByIdAndUpdate(_id,{likeCount:post.likeCount+1},{new:true})
   res.json(updatedpost)
}