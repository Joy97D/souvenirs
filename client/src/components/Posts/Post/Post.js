import React from 'react'
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card,CardContent,CardMedia,CardActions,Button,Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletepost,likePost,getPosts } from '../../../actions/posts';

const useStyles=makeStyles(theme=>({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
      },
      border: {
        border: 'solid',
      },
      fullHeightCard: {
        height: '100%',
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
      },
      overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
      },
      overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        // color: 'white',
      },
      grid: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
      },
      title: {
        padding: '0 16px',
      },
      cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      },
    }))
const Post=({post,setcurrentid})=>{
  const dispatch= useDispatch();
  const handlelikechange=(id)=>{
    dispatch(likePost(id))
    // console.log('changing likes')
  }
  const classes = useStyles();
    return(
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={post.selectedfile} />
           <div className={classes.overlay}>
            <Typography variant='h5'>{post.creator}</Typography>
            <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
           </div>
           <div className={classes.overlay2}>
              <Button style={{color:'white'}} size='small' onClick={()=>{setcurrentid(post._id)}}>
                <MoreHorizIcon fontSize='default'/>
              </Button>
           </div>
           <div className={classes.details}>
              <Typography variant='body2' color='textSecondary'> 
               {post.tags.map((tag)=>`#${tag} `)}
              </Typography>
           </div>
           <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>
           <CardContent>
           <Typography variant='body2' color='textSecondary' component='p'>{post.message}</Typography>
           </CardContent>
           <CardActions className={classes.cardActions}>
            <Button size='small' onClick={()=>{handlelikechange(post._id)}} color='primary'>
              <ThumbUpIcon/>
                 {`Like ${post.likeCount}`}
            </Button>
            <Button size='small' onClick={()=>{dispatch(deletepost(post._id))}} color='primary'>
              <DeleteIcon/> 
              Delete
            </Button>
           </CardActions>
        </Card>
    );
}

export default Post;