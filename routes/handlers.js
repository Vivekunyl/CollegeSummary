const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('index',{
        title:"Home Page",
        style:"style.css"
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
        title:"My Blogs",
        style:"content.css"
    });
})
module.exports = router;