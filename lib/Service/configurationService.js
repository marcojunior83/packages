function configurationService(){

}



configurationService.prototype.getConfiguration = function(req,res){
    return new Promise(function (resolve, reject) {

        const objRequest = {
            url: process.env.URL_Configuration + 'User/getConfiguration',
            method: 'POST',
            json: true,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: {
                pageID: req.body.pageID,
                userID: req.body.userID
            }
        }

        request(objRequest, (error, response) => {
            if (error) {
                reject(error);
            }
            else if (response.statusCode == 200) {
                return resolve(response.body);
            }
        });
    });
}

module.exports =  new configurationService();