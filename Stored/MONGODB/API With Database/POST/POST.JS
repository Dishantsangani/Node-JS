const express = require("express");
const dbconnection = require("./Mongodb");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  let data = await dbconnection();
  data = await data.find().toArray();
  res.send(data);
});
app.post("/", async (req, res) => {
  let data = await dbconnection();
  let result = data.insertOne(req.body);
  res.send(result);
});
app.listen(2700);

