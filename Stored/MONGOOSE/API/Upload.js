const express = require("express");
require("./Config");
const multer = require("multer");
const product = require("./Product");
const app = express();
app.use(express.json());
const upload = multer({
  storage: multer.diskStorage({
    destination: function (res, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

app.post("/upload", upload, (req, res) => {
  res.send("file upload");
});

app.listen(2700);
