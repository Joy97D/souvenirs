import axios from 'axios'
import { getPosts } from '../actions/posts';
const url='http://localhost:5000/posts';

// export const fetchPosts=()=>{ axios.get(url)};
export const fetchPosts = () => {
    return axios.get(url);
};
export const createPost=(newPost)=>{return axios.post(url,newPost)};

export const updatepost=(currentid,post)=>{ return axios.put(`${url}/${currentid}`,post)}

export const deletepost=(currentid)=>{ return axios.delete(`${url}/${currentid}`)}

export const likePost=(currentid)=>{return axios.put(`${url}/${currentid}/like`)}