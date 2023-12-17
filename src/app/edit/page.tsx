'use client'
import React, { useState } from 'react'
import { FourceRefresh } from '@/components/FourceRefresh';
import { Button } from '@/components/ui/button';
import { CldImage } from 'next-cloudinary';
import { Input } from '@/components/ui/input';
const EditPage = ({ searchParams }: { searchParams: { public_id: string } }) => {
  const { public_id } = searchParams
  const [transformation, setTransformation] = useState<ImageEffectType>(undefined)
  const [prompt, setPrompt] = useState<string>('')
  const [pendingPrompt, setPendingPrompt] = useState<string>('')
  return (
    <section>
      <FourceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit image </h1>
        </div>
        <div className='flex gap-4'>
          <Button onClick={() => setTransformation(undefined)} variant='ghost'>clear all</Button>
          <div className='flex flex-col gap-4'>
            <Button onClick={() => {
              setPrompt(pendingPrompt)
              setTransformation('fillBackground')
            }}>Generative fill</Button>
            <label >prompt</label>
            <Input
              value={pendingPrompt}
              onChange={e => setPendingPrompt(e.target.value)}
            />
          </div>
          <Button onClick={() => setTransformation('blur')}>Blur </Button>
          <Button onClick={() => setTransformation('grayscale')}>grayscale </Button>
          <Button onClick={() => setTransformation('pixelate')}>pixelate </Button>
          <Button onClick={() => setTransformation('removeBackground')}>remove BG </Button>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <CldImage
            src={public_id}
            width="500"
            height="300"
            alt={public_id}
            sizes="100vw"
          />
          {transformation === 'fillBackground' && (
            <CldImage
              src={public_id}
              width="500"
              height="300"
              alt={public_id}
              sizes="100vw"
              fillBackground={{
                prompt
              }}
            />
          )}
          {transformation === 'blur' && (
            <CldImage
              src={public_id}
              width="500"
              height="300"
              alt={public_id}
              sizes="100vw"
              blur="2000"
            />
          )}
          {transformation === 'grayscale' && (
            <CldImage
              src={public_id}
              width="500"
              height="300"
              alt={public_id}
              sizes="100vw"
              grayscale
            />
          )}
          {transformation === 'pixelate' && (
            <CldImage
              src={public_id}
              width="500"
              height="300"
              alt={public_id}
              sizes="100vw"
              pixelate
            />
          )}
          {transformation === 'removeBackground' && (
            <CldImage
              src={public_id}
              width="500"
              height="300"
              alt={public_id}
              sizes="100vw"
              removeBackground
            />
          )}
        </div>
      </div>

    </section>
  )
}

export default EditPage