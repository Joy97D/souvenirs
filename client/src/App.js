import React,{ useEffect,useState} from "react";
import AppBar from '@mui/material/AppBar';
import Grow from '@mui/material/Grow';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import memories from './images/memories.png'
import { getPosts } from './actions/posts' 
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
// import useStyles from './styles';
const useStyles={
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        marginLeft: '15px',
      },
}
const App = () =>{
    const dispatch= useDispatch();
    const [currentid,setcurrentid]=useState(null);
    // const classes = useStyles();
    useEffect(()=>{
      dispatch(getPosts())
    },[currentid,dispatch])
    return(
        <Container maxWidth="lg">
            <AppBar style={useStyles.appBar} position="static" color="inherit">
                <Typography style={useStyles.heading} variant="h2">Memories</Typography>
                <img style={useStyles.image} src={memories} alt="memories" height="60" ></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setcurrentid={setcurrentid}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <Form currentid={currentid} setcurrentid={setcurrentid} />
                     </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
export default App;