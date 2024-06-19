import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.post("", createUser);
userRoutes.get("", getUsers);
userRoutes.get("/:userid", getUser);
userRoutes.delete("/:userid", deleteUser);
userRoutes.patch("/:userid", updateUser);

export default userRoutes;
