const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

// CONFIGURE .ENV FILE PATH
require("dotenv").config();

// INITIALIZE APP
const app = express();

// SET SECURITY HEADERS
app.use(helmet());

// BODY PARSERS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DEVELOPMENT LOGGER
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// CONNECT TO DATABASE HERE ============================
// =====================================================

// ROUTES
app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Hello from server side",
  });
});

// INVALID ROUTE HANDLER
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `cannot find ${req.originalUrl} on this server`,
  });
});

// CUSTOM ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
  res.status(err.status).json({
    status: "fail",
    message: err.message,
    error: err,
  });
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 9090");
});
