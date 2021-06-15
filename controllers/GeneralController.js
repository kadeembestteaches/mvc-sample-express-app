const express = require('express');
const ProductModel = require("../models/ProductModel.js");
const router = express.Router();

router.get("/",(req,res)=>{



    res.render("home",{
        featuredProdcts : ProductModel.getFeaturedProducts()
    })
 })


 
 //about
 router.get("/about-us",(req,res)=>{
 
     res.render("about")
  })


module.exports = router;