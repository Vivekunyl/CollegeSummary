const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('index',{
        title:"Home Page",
        style:"index.css"
    });
});

router.get('/about',(req,res)=>{
    res.render('about',{
        title:"About Us",
        style:'about.css',
        link1:"Contact me here",
        link2:"My Blogs"
    });
});

router.get('/contact',(req,res)=>{
    res.render('contact',{
        title:"Contact us",
        style:"style.css"
    });
});

router.get('/content',(req,res)=>{
    res.render('content',{
        title:"Content|Collegesummary",
        style:"content.css"
    });
});

router.get('/test',(req,res)=>{
    res.render('test',{
        title:"Content|MCQ",
        style:"test.css"
    });
});

module.exports = router;