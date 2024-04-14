import User from "@/Model/User";
import connectDB from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await connectDB();
  const { name, email, password } = req.body;
  const person = new User({
    name: name,
    email: email,
    password:password,
  });
  await person.save();
  console.log("inside api", name, email, password);
  res.status(200).json({ message: "true" });
}
