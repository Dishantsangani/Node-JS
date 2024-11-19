const express = require("express");
require("./Config");
const product = require("./Product");
const app = express();
app.use(express.json());
app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  let data = await product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brend: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  res.send(data);
});
app.listen(2700);
