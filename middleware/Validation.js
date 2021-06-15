exports.validateLoginForm = (req,res,next)=>{


    console.log(`Login Form`);
    next();


};

exports.validateRegForm = (req,res,next)=>{


    console.log(`Registration Form`);
    next();
    

};

exports.validateAdminForm = (req,res,next)=>{


    console.log(`Admin FOrm`);
    next();

};




