const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("hello Dishant Sangani");
});
app.get("/about", (req, res) => {
  res.send("This is a About Page");
});
app.get("/help", (req, res) => {
  res.send("This is a help Page");
});
app.listen(2700);
