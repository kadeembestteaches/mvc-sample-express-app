const express = require("express");
const exphbs  = require('express-handlebars');

//This allows us to extract form submitted  data
//from our POST request in a sexy way!(req.body.nameOfFormControl)
const bodyParser = require('body-parser');

const generalController = require("./controllers/GeneralController.js");
const productController = require("./controllers/ProductController.js");
const userController = require("./controllers/UserController.js")


const app = express();


//middleware 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//This loads your static assests (CSS,BrowserJS, images, pdf, audio files,etc)
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
 app.use(express.urlencoded({ extended: false }))

app.use("/",generalController);
app.use("/product",productController);
app.use("/user",userController);



const PORT =3000;


app.listen(PORT,()=>{
    console.log(`Web Server is up an running on PORT :${PORT}`);
})