import * as api from '../api'

// Action Creators

export const getPosts=()=>async(dispatch)=>{
    try{
         const { data } =await api.fetchPosts();
         console.log('Fetching')
         dispatch({type: 'FETCH_ALL', payload:data})
    }
    catch(err){
        console.log(err.message);
    }
}

export const createPost=(post)=>async(dispatch)=>{
    try{
      const { data } = await api.createPost(post);
      dispatch({type:'CREATE',payload:data})
    }
    catch(err){
      console.log(err.message)
    }
}

export const updatepost=(currentid,post)=> async(dispatch)=>{
  try{
    const { data }= await api.updatepost(currentid,post)
    dispatch({type:'UPDATE',payload:data})
  }
  catch(err){
     console.log(err)
  }
}

export const deletepost=(currentid)=>async(dispatch)=>{
  try{
    await api.deletepost(currentid)
    dispatch({type:'DELETE',payload:currentid})
  }
  catch(err)
  {
    console.log(err)
  }
}

export const likePost=(currentid)=>async(dispatch)=>{
  try{
    const { data }=await api.likePost(currentid)
    dispatch({type:'LIKE',payload:data})
  }
  catch(err){
    console.log(err)
  }
}