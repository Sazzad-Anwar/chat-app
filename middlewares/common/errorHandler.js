const createError = require("http-errors");

//404 not found handler
const notFoundHandler = (req, res, next) => {
  next(createError(404, "Requested content was not found"));
};

//Default error handler
const errorHandler = (error, req, res, next) => {
  res.locals.error =
    process.env.NODE_ENV === "development" ? error : { message: error.message };
  res.status(error.status || 500);

  if (res.locals.html) {
    res.render("error", {
      title: "Error Page",
    });
  } else {
    res.json(res.locals.error);
  }
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
