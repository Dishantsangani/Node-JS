const express = require("express");
const router = express.Router();

const {
  GetAllUser,
  GetUserById,
  UpdateById,
  CreateUser,
  DeleteById,
} = require("../Controllers/UserController");

router.route("/").get(GetAllUser).post(CreateUser);
router.route("/:id").get(GetUserById).patch(UpdateById).delete(DeleteById);

module.exports = router;
