import { Router } from "express";
import userRoutes from "./user.routes";

const indexRoute = Router();

indexRoute.get("", async (req, res) => {
  res.json({ message: "Welcome User" });
});

indexRoute.use("/users", userRoutes);

export default indexRoute;
