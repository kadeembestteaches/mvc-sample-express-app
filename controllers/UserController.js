const express = require('express')
const router = express.Router();




//IF THE CLIENT SENDS A POST REQ : domainname.com/user/registration
router.post("/registration",(req,res)=>{



    /*

    This is how bodyParser makes Express access form submitted
    data :


    req.body.nameOfFormControl

    */

    /*
    
        What are some of the things I can do in here?
        
        Validate incomming data:
        Once validated, insert into Database 



    */

        const errors = [];

        if(req.body.firstName =="")
        {
            errors.push("Please enter a first Name")
        }

        if(req.body.lastName =="")
        {
            errors.push("Please enter a last Name")
        }

        if(req.body.email=="")
        {
            errors.push("Please enter a email Name")

        }

        if(req.body.password=="")
        {
            errors.push("Please enter an password")
        }

        //This represents failed validation
        if(errors.length > 0)
        {
            res.render("reg",{
                errors
            })
        }


        //passed validation 
        else
        {
            //go back to www.domainname.com/
           // res.redirect("/")//

            res.redirect("/") // sending a GET req to specified route
        }
})


router.get("/registration",(req,res)=>{

    res.render("reg")
 })


//login

router.get("/login",(req,res)=>{
    
    res.render("login");
})


module.exports = router;