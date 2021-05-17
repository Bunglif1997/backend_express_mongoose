const express = require('express');
const router = express.Router();

//postModel
const Posts = require('../../models/Posts');

//@router GET All API/post 
router.get('/',async(req,res)=>{
  try {
    const posts = await Posts.find();
    if(!posts) throw Error('No Item');
    res.status(200).json(posts);
  }catch(err){
    res.status(400).json ({msg:err})
  }
})

//@router GET ONE API/post 
router.get('/:id',async(req,res)=>{
  try {
    const post = await Posts.findById(req.params.id);
    if(!post) throw Error('No Item');
    res.status(200).json(post);
  }catch(err){
    res.status(400).json ({msg:err})
  }
})




//@router POST API/post 
router.post('/', async(req,res) => {
   const newPost = new Posts(req.body);
   try {
    const post = await newPost.save();
    if(!post) throw Error ('Something went wrong while saveing the post')
    res.status(200).json(post);
   }catch(err) {
 res.status(400).json ({msg:err})
   }
});

//@router delect ONE API/post 
router.delete('/:id',async(req,res)=>{
try{
  const post = await Posts.findByIdAndDelete(req.params.id);
  if(!post) throw Error('No post found!');
  res.status(200).json({success:true})
}catch(err){
res.status(400).json({msg:err})
}
})

//@router update ONE API/post 
router.put('/:id',async(req,res)=>{
  try{
    const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
    if(!post) throw Error('Something went wrong while updating the post!');
    res.status(200).json({success:true})
  }catch(err){
  res.status(400).json({msg:err})
  }
  })

module.exports = router;