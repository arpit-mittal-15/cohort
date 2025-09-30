import { Request, Response } from "express";
import { z } from "zod";
import prisma from "../../config/db";

const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const blogs = await prisma.blog.findMany();

    return res.status(200).json({ blogsData: blogs });
  } catch (e) {
    return res.status(401).json({ message: "signup failed" });
  }
};

export default getAllBlogs;
