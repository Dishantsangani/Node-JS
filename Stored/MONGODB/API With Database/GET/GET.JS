const express = require("express");
const dbconnection = require("./Mongodb");
const app = express();
app.get("/", async (req, res) => {
  let data = await dbconnection();
  data = await data.find().toArray();
  console.log(data);
  res.send(data);
});

app.listen(2700);
