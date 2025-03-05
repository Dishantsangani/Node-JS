require("dotenv").config();
const express = require("express");
const { connectdb } = require("./DataBase/Connection");
const UserRouter = require("./Routes/UserRoute");

// Server Side Rendering
const path = require("path");

const App = express();
const PORT = process.env.PORT;

// Middleware
App.use(express.urlencoded({ extended: false }));

// Database  Connection
connectdb();

// Routes
App.use("/api/user", UserRouter);

// Server Side Rendering
App.set("view engine", "ejs");
App.set("views", path.resolve("./Views"));
App.get("/test", (req, res) => {
  return res.render("Home");
});

// Port Start
App.listen(PORT, () => {
  console.log(`Server Is Started At Port ${PORT}`);
});
