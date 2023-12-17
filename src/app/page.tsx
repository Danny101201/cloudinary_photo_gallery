"use client"
import { ImageInfotype } from '@/_types_/image';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { CldImage, CldUploadButton, CldUploadWidgetResults } from 'next-cloudinary'
import { useState } from 'react';

export const hasImageInfo = (image: CldUploadWidgetResults): image is CldUploadWidgetResults & { info: ImageInfotype } => {
  return Object.keys(image.info ?? {}).length > 0
}
export default function Home() {
  const [imageId, setImageId] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
    </main>
  )
}
