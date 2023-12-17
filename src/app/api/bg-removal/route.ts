import { NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function POST(request: Request) {
  const body = await request.json()
  const { notification_type, tags, secure_url } = body
  if (notification_type === 'upload' && tags.includes('bg-remover')) {
    console.log(`Removing background from ${secure_url}`)

    await cloudinary.uploader.upload(secure_url, {
      background_removal: 'cloudinary_ai',
      folder: 'examples/baclground-remover'
    })
  }
  return NextResponse.json({ body }, { status: 200 })
}
