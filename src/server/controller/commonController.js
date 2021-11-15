/**
 * Get method for health check of API
 */
let healthCheck = (req, res, next) => {
    res.status(200).send({ messsage: 'Api Running Successfully' });
}

/**
 * Method to create success response
 */
const successResponse = (data) => {
    return {
        status: 'Success',
        data: data
    }
}

/**
 * Method to create error response
 */
const errorResponse = (error) => {
    return {
        status: 'Error',
        error
    }
}

module.exports = {
    healthCheck,
    successResponse,
    errorResponse
}