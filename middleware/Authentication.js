exports.isAuthenticated = (req,res,next)=>{

        
    const isAuthenticated = true;


    if(isAuthenticated)
    {

        console.log(`Yay I have been authenticated`);
        next();
    }

    else
    {
        res.render("error");
    }


};

exports.isAuthorized = (req,res,next)=>{


    const isAuthorized = false;


    if(isAuthorized)
    {
        console.log(`Yay I have been authorized`);
        next();
    }

    else
    {
        res.render("error");
    }
}

