const exp=require('express')
const userApp=exp.Router();
const UserAuthor=require("../models/userAuthermodel")
const expressAsyncHandler=require("express-async-handler");
const createUserOrAuthor=require('./createuserorAuthor')
const Article=require('../models/articleModel')


//API

//create new user
userApp.post('/user',expressAsyncHandler(createUserOrAuthor))

//adding comments
userApp.put('/comment/:articleId',expressAsyncHandler(async(req,res)=>{
    const commentObj=req.body;

    //add comment abj to comments
    const articleWithComments = await Article.findOneAndUpdate(
        {articleId:req.params.articleId},
        {$push:{comments:commentObj}},
        {returnOriginal:false}//by default the findOneandUpdate returns the date before updating 
        //setting it to false wil allow it to send the updated data
    )
    res.send({message:'comment added',payload:articleWithComments})
}))

module.exports=userApp;