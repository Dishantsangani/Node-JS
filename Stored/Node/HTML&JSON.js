const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send(
    `<h1>Welcome to Node js learn With Dev</h1> 
    <a href="/about" >got to about Page</a> `
  );
});
app.get("/about", (req, res) => {
  res.send(`
    <input type="text" placeholder="username" value="${req.query.name}"/>
    <button>click me</button>
    <a href="/" >got to home Page</a>
    `);
});
app.get("/help", (req, res) => {
  res.send([
    {
      name: "Dishant",
      email: "Dishant@gmail.com",
    },
    {
      name: "same",
      email: "sam@gmail.com",
    },
  ]);
});
app.listen(2700);
