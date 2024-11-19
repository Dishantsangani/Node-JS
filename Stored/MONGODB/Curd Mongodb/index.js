const dbconnection = require('../Mongodb');
// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017";
// const database = "e-comm";
// const client = new MongoClient(url);

// async function dbconnection() {
//   let result = await client.connect();
//   let db = result.db(database);
//   return db.collection("products");
//   // let reponse = await collecton.find({name:"m 40"}).toArray();
//   // console.log("reponse: ", reponse);
// }
// dbconnection().then((resp) => {
//   resp
//     .find()
//     .toArray()
//     .then((data) => console.log(data));
// });
// console.log(dbconnection());

// Other way
const main = async () => {
  let data = await dbconnection();
  data = await data.find().toArray();
  console.log("data: ", data);
  // console.log("Main function called");
};
main();
