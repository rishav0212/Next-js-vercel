import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("data");
    const hashedPassword = await bcrypt.hash(data.password, 10);
    console.log(hashedPassword);
    await connectMongoDB();

    await User.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
