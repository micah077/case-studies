import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const path = searchParams.get("path");

  if (!path) {
    return NextResponse.json(
      { message: "Missing param path" },
      { status: 400 }
    );
  }

  try {
    revalidatePath(path);
    return NextResponse.json({ message: `Revalidated Path: ${path}` });
  } catch (error) {
    return NextResponse.json(
      { message: "Error revalidating", error: error.message },
      { status: 500 }
    );
  }
}
