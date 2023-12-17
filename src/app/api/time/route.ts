import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
export const revalidate = true
export async function GET(request: Request) {
  revalidatePath('/gallery')
  return NextResponse.json({ now: Date.now() })
}