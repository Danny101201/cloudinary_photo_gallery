import { NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function POST(request: Request) {
  const body = await request.json()
  const { url, folder } = body
  const result = await cloudinary.uploader.upload(url, {
    folder,
    tags: ['bg-remover']
  })
  return NextResponse.json({ message: 'success', result }, { status: 202 })
}
