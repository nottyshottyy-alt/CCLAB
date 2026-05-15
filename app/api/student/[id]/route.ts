// app/api/student/[id]/route.ts — Task 5.2: Dynamic Route (URL Parameters)
import { NextResponse } from "next/server";

const data: Record<string, object> = {
  "001": { name: "Ali Ahmed", lab: 8 },
  "002": { name: "Sara Khan", lab: 8 },
};

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const student = data[id];
  if (!student)
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(student);
}
