import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  user?: { userid: string }; // customize based on your payload
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if(!token){
    return res.status(403).json({ message: "You are not authorized" });
  }

  try{
    const details = jwt.verify(token, process.env.JWT_SECRET || "");
    if (typeof details === "object" && details !== null && "userid" in details) {
      req.user = { userid: (details as { userid: string }).userid };
    } else {
      return res.status(401).json({ message: "invalid token payload" });
    }
  } catch {
    return res.status(401).json({ message: "invalid token" });
  }

  next();
}

export default authMiddleware;