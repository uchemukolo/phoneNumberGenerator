class ErrorHandler {

  /**
     * Error handler
     *
     * @static
     * @param  {string} error - error string
     * @param  {integer} statusCode - status code
     * @returns {object} response object
     * @memberof ErrorHandler
     */
  static handleError(error, statusCode, response) {
    return response.status(statusCode).json({
      success: false,
      error
    });
  }
}

export default ErrorHandler;