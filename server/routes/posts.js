import express from 'express';

import { getposts,createpost,updatepost,deletepost,likePost } from '../controllers.js/posts.js';
const router=express.Router();

router.get('/',getposts)
router.post('/',createpost)
router.put('/:id',updatepost)
router.delete('/:id',deletepost)
router.put('/:id/like',likePost)

export default router;