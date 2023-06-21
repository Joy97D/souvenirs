import React from 'react'
import { useSelector } from 'react-redux';
import { Grid,CircularProgress } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import Post from './Post/Post';
const useStyles=makeStyles(theme=>({
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
      },
      smMargin: {
        margin: theme.spacing(1),
      },
      actionDiv: {
        textAlign: 'center',
      },
}))
const Posts=({setcurrentid})=>{
  const posts=useSelector((state)=>state.posts)
  const classes = useStyles();
  console.log(posts)
  // console.log(new Date())
    return(
        !posts.length ? <CircularProgress/> : 
        (
          <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3} >
            {
              posts.map((post)=>(
                <Grid key={post._id} item xs={12} sm={6}>
                  <Post post={post} setcurrentid={setcurrentid}/>
                </Grid>
              ))
            }
          </Grid>
        )
    );
}
export default Posts;