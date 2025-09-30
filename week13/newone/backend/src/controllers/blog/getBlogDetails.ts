import { Request, Response } from "express";
import { z } from "zod";
import prisma from "../../config/db";

const blogSchema = z.object({
  title: z.string(),
  content: z.string()
});

type blogType = z.infer<typeof blogSchema>;

const getBlogDetails = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const blogid = req.params.id;

    if(!blogid) return res.status(403).json({ message: "Invalid creds" });

    const blog = await prisma.blog.findFirst({
      where: {
        id: blogid
      }
    });

    if(!blog) return res.status(403).json({ message: 'no blog present with this id' });

    return res.status(200).json({ blogDetails: blog });
  } catch (e) {
    return res.status(401).json({ message: "signup failed" });
  }
};

export default getBlogDetails;
