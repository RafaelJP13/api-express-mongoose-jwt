import {
  VALIDATION_ERROR, NOT_FOUND, UNAUTHORIZED, FORBIDDEN, SERVER_ERROR,
} from '../constants';

const errorHandler = (err, req, res) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case VALIDATION_ERROR:
      res.json({ title: 'Not Found', message: err.message, stackTrace: err.stack });
      break;
    case NOT_FOUND:
      res.json({ title: 'Validation Failed', message: err.message, stackTrace: err.stack });
      break;
    case UNAUTHORIZED:
      res.json({ title: 'Unauthorized', message: err.message, stackTrace: err.stack });
      break;
    case FORBIDDEN:
      res.json({ title: 'Forbidden', message: err.message, stackTrace: err.stack });
      break;
    case SERVER_ERROR:
      res.json({ title: 'Server Error', message: err.message, stackTrace: err.stack });
      break;
    default:
      console.log('No Error, All Good');
      break;
  }
};

export default errorHandler;
