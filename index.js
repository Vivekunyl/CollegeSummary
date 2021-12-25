const express = require('express');
const app = express();
const  {engine}  = require("express-handlebars");
const path = require("path");
const port = process.env.PORT || 8000;
const routes = require('./routes/handlers');
app.use(express.static(path.join(__dirname,'public')));

app.engine("handlebars", engine({defaultLayout: 'main'  }));    //To change thename of your default layout directory we can do this by ,layoutsDir:"views/test"
app.set('view engine', 'handlebars');

//Routing
app.use("/",routes);

app.use("/about",routes);

app.use("/contact",routes);

app.use("/content",routes);

app.use('/test',routes);

app.listen(port,()=>{
    console.log(`Port started at port http://localhost:${port}`);
});