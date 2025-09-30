import { Request, Response } from "express";
import { z } from "zod";
import prisma from "../../config/db";
import jwt from "jsonwebtoken";

const signupSchema = z.object({
  name: z.string().optional(),
  email: z.email(),
  password: z.string().min(8),
});

type signupType = z.infer<typeof signupSchema>;

const userSignup = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const result = signupSchema.safeParse(body);
    if (!result.success) {
      return res.status(411).json({ message: "Inputs are incorrect" });
    }

    const userData = result.data;

    const user = await prisma.user.create({
      data: {
        email: userData.email,
        password: userData.password,
        name: userData?.name,
      },
      select: {
        id: true,
      },
    });

    const token = jwt.sign({ userid: user.id }, process.env.JWT_SECRET || "");

    return res.status(200).json({ token });
  } catch (e) {
    return res.status(401).json({ message: "signup failed" });
  }
};

export default userSignup;
