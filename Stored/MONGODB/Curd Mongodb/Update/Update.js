const dbconnection = require("./Mongodb");

const updatedata = async () => {
  let data = await dbconnection();
  let result = await data.updateOne(
    { name: "note 10" },
    {
      $set: { name: "max pro 5", price: 2700 },
    }
  );
  console.log("data: ", data);
};
updatedata();
