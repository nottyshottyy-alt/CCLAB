// app/api/geo/route.js — Task 6.2: Geolocation Endpoint (Edge Runtime)
export const runtime = "edge"; // ← switches this to Edge Runtime

import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json({
    country: req.geo?.country || "Only available on production",
    city: req.geo?.city || "Test on your deployed URL",
    runtime: "edge",
  });
}
