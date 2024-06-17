import { Request, Response } from "express";
import prisma from "../client";

// Creating a user
export async function createUser(req: Request, res: Response) {
  try {
    const user = await prisma.user.create({
      data: req.body,
    });

    res.status(201).json({
      status: true,
      message: "User Successfuly Created",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "server error",
    });
  }
}

// Get all users
export async function getUsers(req: Request, res: Response) {
  const users = await prisma.user.findMany();

  res.json({
    status: true,
    message: "Users Successfuly Fetched",
    data: users,
  });
}
