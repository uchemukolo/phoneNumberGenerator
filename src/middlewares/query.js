import CustomError from '../helpers/errorHandler';
import { ORDER, MAX_NUMBERS } from '../helpers/defaultData';

export default class QueryValidator {

  static checkQuery(request, response, next) {
    const { quantity, order } = request.query;

    if (!quantity || !quantity.replace(/\s/g, '').length || isNaN(quantity) || quantity > MAX_NUMBERS) {
      CustomError.handleError(`Quantity must be a number and not greater than ${MAX_NUMBERS}`, 400, response);
    }
     else if (!order || !order.replace(/\s/g, '').length || !ORDER.includes(order.toLowerCase())) {
      CustomError.handleError('Order must be either ascending or descending', 400, response);
    }
    else{
      next();
    }
  }

}