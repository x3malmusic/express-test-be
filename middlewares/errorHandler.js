import error, { UNKNOWN_ERROR } from "../helpers/errorTypes";

const errorHandler = (err, req, res, next) => {
  if (error[err]) {
    return res.status(error[err].status).json({ message: error[err].message, type: err })
  }

  console.log("exception Error", err);
  res.status(error[UNKNOWN_ERROR].status).json({ message: error[UNKNOWN_ERROR].message, type: UNKNOWN_ERROR })
};

export default errorHandler