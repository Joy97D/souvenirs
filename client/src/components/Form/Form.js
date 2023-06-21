import { useState } from 'react';
import React from 'react';
import { TextField,Button,Paper,Typography } from '@mui/material';
import FileBase from 'react-file-base64';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { createPost,updatepost } from '../../actions/posts';

const useStyles=makeStyles(theme=>({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },
      paper: {
        padding: theme.spacing(2),
      },
      form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      fileInput: {
        width: '97%',
        margin: '10px 0',
      },
      buttonSubmit: {
        marginBottom: 10,
      },
}))
const Form=({currentid,setcurrentid})=>{
  const [postData,setpostData]=useState({
    creator:'', title:'',message:'',tags:'',selectedfile:''
  })
  const post=useSelector((state)=>currentid ? state.posts.find((p)=> p._id===currentid): null)
  const classes = useStyles();
  const dispatch=useDispatch();

  useEffect(()=>{
     if(post) setpostData(post)
  },[post])
  const handlesubmit=(e)=>{
   e.preventDefault();
   if(currentid){
    dispatch(updatepost(currentid,postData))
   }
   else{
    dispatch(createPost(postData))
   }
   clear()
  }

  const clear=()=>{
    setcurrentid(null)
    setpostData({creator:'', title:'',message:'',tags:'',selectedfile:'' })

  }
    return(
        <Paper className={classes.paper} elevation={5}>
          <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handlesubmit}>
          <Typography variant="h5" fontWeight='bold'>{currentid ? 'Editing' : 'Creating'} a Memory</Typography>
          <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator}
           onChange={(e) =>{setpostData({ ...postData, creator: e.target.value}) }}></TextField>
           <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title}
           onChange={(e) =>{setpostData({ ...postData, title: e.target.value}) }}></TextField>
           <TextField name='message' variant='outlined' label='Message' fullWidth value={postData.message}
           onChange={(e) =>{setpostData({ ...postData, message: e.target.value}) }}></TextField>
           <TextField name='tags' variant='outlined' label='Tags (comma seperated)' fullWidth value={postData.tags}
           onChange={(e) =>{setpostData({ ...postData, tags: e.target.value.split(',')}) }}></TextField>
           <div className={classes.fileInput}>
               <FileBase type="file" multiple={false} onDone={({base64})=>setpostData({...postData,selectedfile:base64})}/>
           </div>
           <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
           <Button variant='container' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
          </form>
        </Paper>
    );
}
export default Form;