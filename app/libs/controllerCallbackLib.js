const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
let loggererr = ''
let msg = []
let crudCallback = (err, result, res, function1) => {
    if (function1 == 'getAllUser') {
        loggererr = 'getAllUser'
        msg = ['Failed To get users details', 'No User Found', 'Users details found']

    } else if (function1 == 'getSingleUser') {
        loggererr = 'getSingleUser'
        msg = ['Failed To get user details', 'No User Found', 'User details found']
    } else if (function1 == 'deleteUser') {
        loggererr = 'deleteUser'
        msg = ['Failed To delete user', 'No User Found', 'User details deleted']
    } else if (function1 == 'editUser') {
        loggererr = 'editUser'
        msg = ['Failed To edit User', 'No User Found', 'User details edited']
    } else {
        return
    }

    if (err) {
        console.log(err)
        logger.error(msg[0], `User Controller: ${loggererr}`, 10)
        let apiResponse = response.generate(true, msg[0], 500, null)
        res.send(apiResponse)
    } else if (check.isEmpty(result)) {
        logger.error(msg[1], `User Controller: ${loggererr}`, 10)
        let apiResponse = response.generate(true, msg[1], 404, null)
        res.send(apiResponse)
        
    } else {
        logger.info(msg[2], `User Controller: ${loggererr}`, 10)
        let apiResponse = response.generate(false, msg[2], 200, result)
        res.send(apiResponse)
    }
}

module.exports = {
    crudCallback : crudCallback
}