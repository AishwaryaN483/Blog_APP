const exp=require('express')
const expressasynchandler=require('express-async-handler')
const userauthor=require('../models/userAuthermodel')
const createUserOrAuthor=require('./createuserorAuthor')
const Article=require("../models/articleModel")

const authorapp=exp.Router();

authorapp.post('/author',expressasynchandler(createUserOrAuthor))

//create new article 
authorapp.post('/article',expressasynchandler(async(req,res)=>{
    //get new article from req

    const newArticleObj=req.body;

    const newArticle=new Article(newArticleObj)
    const articleObj=await newArticle.save();

    res.status(201).send({message:"article Published",payload:articleObj})

}))


authorapp.get('/articles',expressasynchandler(async(req,res)=>{
    const listOfArticles=await Article.find({isArticleActive:true})

    res.status(200).send({message:"ARTICLES",payload:listOfArticles})
}))


authorapp.put('/article/:articleId',expressasynchandler(async(req,res)=>{

    //get modified article
    const modifiedArticle=req.body;
    //update article by article Id
    const dbRes=await Article.findByIdAndUpdate(modifiedArticle._id,
        { ...modifiedArticle},
        {returnOriginal:false})//no need to pass the condition
    
    res.status(200).send({message:"article modified",payload:dbRes})

}))


//deleting (SOFT DELETE)
authorapp.put('/articles/:articleId',expressasynchandler(async(req,res)=>{

    //get modified article
    const modifiedArticle=req.body;
    //update article by article Id
    const dbRes=await Article.findByIdAndUpdate(modifiedArticle._id,
        { ...modifiedArticle},
        {returnOriginal:false})//no need to pass the condition
    
    res.status(200).send({message:"article deleted",payload:dbRes})

}))



module.exports=authorapp;