var configurationService =  require('../Service/configurationService.js');


function userController(){
}

userController.prototype.getUserConfiguration =  function(req,res,next){
    configurationService.getConfiguration(req,res)
    .then(function(result){
        res.User = result;
        next();
    });
}


module.exports= new userController();