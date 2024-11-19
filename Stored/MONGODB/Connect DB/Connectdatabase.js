const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "e-comm";
const client = new MongoClient(url);

async function getdata() {
  let result = await client.connect();
  let db = result.db(database);
  let collecton = db.collection("products");
  let reponse = await collecton.find({}).toArray();
  console.log("reponse: ", reponse);
}
getdata();
