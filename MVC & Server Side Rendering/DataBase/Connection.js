require("dotenv").config();
const mongoose = require("mongoose");

async function connectdb() {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Mongodb Connected"))
    .catch((err) => console.log("Mongodb error", err));
}
module.exports = { connectdb };
 