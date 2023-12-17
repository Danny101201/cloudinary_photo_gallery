'use client'
import { Button } from '@/components/ui/button';
import { CldUploadButton } from 'next-cloudinary';
import React from 'react'
import { hasImageInfo } from '../app/page';
import { useRouter } from 'next/navigation';
import { log } from 'console';
// cloudinary.v2.api
//   .update("koala5",
//     {
//       categorization: "aws_rek_tagging",
//       auto_tagging: 0.9
//     })
// .then(result => console.log(result));
export const UploadButton = () => {
  const router = useRouter()
  return (
    <Button asChild>
      <CldUploadButton
        onUpload={(result) => {
          setTimeout(() => {
            router.refresh()
          }, 1000)
        }}
        uploadPreset="lmx4yupy"
      >
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          Upload
        </div>
      </CldUploadButton>
    </Button >


  )
}

