const dbconnection = require("./Mongodb");

const deleteData = async () => {
  const data = await dbconnection();
  const result = await data.deleteMany({ name: "note 10" });
  console.log("result: ", result);
  if (result.acknowledged) {
    console.log("deleted successfully");
  }
};

deleteData();
