const errorHandler = (error, request, response, next) => {
    console.log(error.message)
    response.status(404).send("404 not found")
}

module.exports = errorHandler