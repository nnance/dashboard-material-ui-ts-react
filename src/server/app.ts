import cookieParser from "cookie-parser";
import express from "express";
import logger from "morgan";
import * as path from "path";

import ordersRouter from "./routes/orders";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "../")));

app.use("/orders", ordersRouter);

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

module.exports = app;
