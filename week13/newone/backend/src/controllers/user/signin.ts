import { Request, Response } from "express";
import { z } from "zod";
import prisma from "../../config/db";
import jwt from "jsonwebtoken";

const signinSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

type signinType = z.infer<typeof signinSchema>;

const userSignin = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const result = signinSchema.safeParse(body);
    if (!result.success) {
      return res.status(411).json({ message: "Inputs are incorrect" });
    }

    const userData = result.data;

    const user = await prisma.user.findFirst({
      where: {
        email: userData.email,
        password: userData.password
      }
    });

    if(!user){
      return res.status(403).json({ message: "invalid creds" });
    }

    const token = jwt.sign({ userid: user.id }, process.env.JWT_SECRET || "");

    return res.status(200).json({ token });
  } catch (e) {
    return res.status(401).json({ message: "signin failed" });
  }
};

export default userSignin;
