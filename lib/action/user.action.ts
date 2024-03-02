"use server";

import { CreateUserParams } from "@/types";
import { connectToDatabase } from "../mongoose";
import User from "@/database/user.model";

export async function createUser(params: CreateUserParams) {
  try {
    await connectToDatabase();
    const { clerkId, name, username, password, email, picture } = params;
    const user = await User.create({
      clerkId,
      name,
      username,
      password,
      email,
      picture,
    });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getUserByClerkId(clerkId: string) {
  try {
    await connectToDatabase();
    const user = await User.findOne({ clerkId });
    if (!user) throw new Error("User not found");
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
