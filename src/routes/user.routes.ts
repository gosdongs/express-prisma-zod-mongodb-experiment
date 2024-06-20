import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller";
import { validationSchema } from "../middlewares/validation.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/user.schema";

const userRoutes = Router();

userRoutes.post("", validationSchema(createUserSchema), createUser);
userRoutes.get("", getUsers);
userRoutes.get("/:userid", getUser);
userRoutes.delete("/:userid", deleteUser);
userRoutes.patch("/:userid", validationSchema(updateUserSchema), updateUser);

export default userRoutes;
