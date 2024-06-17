import { Request, Response } from "express";
import prisma from "../client";

// Create a user
export async function createUser(req: Request, res: Response) {
  try {
    const user = await prisma.user.create({
      data: req.body,
    });

    res.status(201).json({
      status: true,
      message: "User Successfully Created",
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
    message: "Users Successfully Fetched",
    data: users,
  });
}

// Get a user
export async function getUser(req: Request, res: Response) {
  const { userid } = req.params;

  const user = await prisma.user.findFirst({
    where: {
      id: userid,
    },
  });

  res.json({
    status: true,
    message: "User Successfully Fetched",
    data: user,
  });
}

// Delete a user
export async function deleteUser(req: Request, res: Response) {
  const { userId } = req.params;

  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res.status(401).json({
        status: false,
        message: "User not found",
      });
    }

    await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    res.json({
      status: true,
      message: "User Successfully Deleted",
    });
  } catch (error) {
    res.status(501).json({
      status: false,
      message: "server error",
    });
  }
}
