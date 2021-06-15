const express = require('express')
const router = express.Router();


const authMiddlware = require("../middleware/Authentication.js");

const ProductModel = require("../models/ProductModel.js")


//product/list
router.get("/list/:id",(req,res)=>{

           
    const  id =  parseInt(req.params.id)

    const product = ProductModel.getAProduct(id);

    res.render("productDescription",{

        product
    })

})
///wwww.domain.com/product/list
router.get("/list",authMiddlware.isAuthenticated,authMiddlware.isAuthorized,(req,res)=>{

    const products = ProductModel.getAllProducts()
    res.render("productListing",{
        products
    })
 })


//description
router.get("/description",(req,res)=>{

    res.render("productDescription")
 })





module.exports = router;