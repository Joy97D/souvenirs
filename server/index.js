import bodyParser from "body-parser";
import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv";
import postroutes from './routes/posts.js'

const app= express();


app.use(bodyParser.json({limit: "30mb" ,extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb" ,extended: true}))
app.use(cors());
dotenv.config()
app.use('/posts',postroutes)

// const CONNECTION_URL='mongodb+srv://test:testuser123@cluster0.vaw7hkn.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=> app.listen(PORT,()=>{console.log(`Server running on ${PORT}`)}))
.catch((err)=>{console.log(err.message)})

// mongoose.set('useFindAndModify',false)