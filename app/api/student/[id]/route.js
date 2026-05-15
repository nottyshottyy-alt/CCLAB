// app/api/student/[id]/route.js — Task 5.2: Dynamic Route (URL Parameters)
import { NextResponse } from "next/server";

const data = {
  "001": { name: "Ali Ahmed", lab: 8 },
  "002": { name: "Sara Khan", lab: 8 },
};

export async function GET(_, { params }) {
  const { id } = await params;
  const student = data[id];
  if (!student)
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(student);
}
