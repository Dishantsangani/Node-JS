const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");
const productschema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});
const saveindb = async () => {
  const product = mongoose.model("products", productschema);
  let data = new product({
    name: "Macbook m1",
    price: 27000,
    brand: "xyz",
    category: "Laptop",
  });
  let result = await data.save();
  console.log("result: ", result);
};
// saveindb();
const updateindb = async () => {
  const product = mongoose.model("products", productschema);
  let data = await product.updateOne(
    { name: "mi note 10" },
    {
      $set: { brand: "Iphonex", price: 2900 },
    }
  );
  console.log(data);
};

// updateindb();
const deleteindb = async () => {
  const product = mongoose.model("products", productschema);
  let data = await product.deleteOne({ name: "m 40" });
  console.log("data: ", data);
};
// deleteindb()

const findindb = async () => {
  const product = mongoose.model("products", productschema);
  let data = await product.find();
  console.log("data : ", data);
};
findindb();
