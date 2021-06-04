//External Imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");

//Internal Imports
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");
const loginRoute = require("./routers/loginRoute");
const userRoute = require("./routers/userRoute");
const inboxRoute = require("./routers/inboxRoute");

const app = express();
dotenv.config();

//Database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log(err));

//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//parse cookie
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup
app.use("/", loginRoute);
app.use("/users", userRoute);
app.use("/inbox", inboxRoute);

//404 not found handler
app.use(notFoundHandler);

//error handler
app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`App is listening on port ${process.env.PORT}`)
);
