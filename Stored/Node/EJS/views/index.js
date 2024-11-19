const express = require("express");
const path = require("path");
const app = express();

app.get("", (_, req) => {
  req.render("profile");
});
