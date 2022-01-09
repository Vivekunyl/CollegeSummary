const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = express.Router();


// create a data schema
const contactSchema = {
    name:String,
    email:String,
    phone:Number,
    message:String
}

const Contact = mongoose.model("Contact", contactSchema);

router.get('/',(req,res)=>{
    res.render('index',{
        title:"CollegeSummary",
        style:"index.css"
    });
});

router.get('/about',(req,res)=>{
    res.render('about',{
        title:"About Us",
        style:'about.css'
    });
});

router.get('/contact',(req,res)=>{
    res.render('contact',{
        title:"Contact us |Collegesummary",
        style:"contact.css"
    });
});

router.post('/contact',(req,res)=>{
    let newContact = new Contact({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message
    });
    newContact.save();

    res.redirect('/contactSubmission');
});

//Submission page route
router.get('/contactSubmission',(req,res)=>{
    res.render('contactSubmission',{
        title:"contact|CollegeSummary",
        style:"submission.css"
    })
})

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

router.get('/blogs',(req,res)=>{
    res.render('blogs',{
        title:"Blogs&News|CollegeSummary",
        style:"blog.css"
    });
});

//contribute route

router.get('/contribute',(req,res)=>{
    res.render('contribute',{
        title:"Contribute|Collegesummary",
        style:"contribute.css"
    })
})

module.exports = router;