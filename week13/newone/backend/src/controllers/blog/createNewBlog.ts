import { Request, Response } from "express";
import { z } from "zod";
import prisma from "../../config/db";
import { AuthRequest } from "../../middlewares/auth";

const blogSchema = z.object({
  title: z.string(),
  content: z.string()
});

type blogType = z.infer<typeof blogSchema>;

const createNewBlog = async (req: AuthRequest, res: Response) => {
  try {
    const body = req.body;
    const authorid = req.user?.userid;

    if(!authorid) return res.status(403).json({ message: "Invalid creds" });

    const result = blogSchema.safeParse(body);
    if (!result.success) {
      return res.status(411).json({ message: "Inputs are incorrect" });
    }

    const blogData = result.data;

    const blog = await prisma.blog.create({
      data: {
        authorid,
        title: blogData.title,
        content: blogData.content
      },
      select: {
        id: true,
      },
    });

    return res.status(200).json({ blogId: blog.id });
  } catch (e) {
    return res.status(401).json({ message: "signup failed" });
  }
};

export default createNewBlog;
