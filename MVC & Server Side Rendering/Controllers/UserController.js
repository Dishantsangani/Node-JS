const User = require("../Models/UserModel");

async function GetAllUser(req, res) {
  const alldbusers = await User.find({});
  return res.json(alldbusers);
}
async function GetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "User Not Found" });
  return res.json(user);
}

async function UpdateById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
  return res.json({ status: "Success" });
}

async function DeleteById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Success" });
}

async function CreateUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender
  ) {
    return res.status(400).json({ msg: "All Fileds Are Req..." });
  }
  const result = await User.create({
    firstName: body.first_name,
    LastName: body.last_name,
    email: body.email,
    gender: body.gender,
  });
  console.log("result: ", result);
  return res.status(201).json({ msg: "Success", id: result._id });
}

module.exports = {
  GetAllUser,
  GetUserById,
  UpdateById,
  DeleteById,
  CreateUser,
};
