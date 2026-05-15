// app/api/hello/route.js — Task 5.1: Basic GET Function
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Hello from Vercel Serverless!",
    time: new Date().toISOString(),
  });
}
