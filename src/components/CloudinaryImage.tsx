'use client'
import { Heart } from '@/components/icon/Heart'
import { CldImage } from 'next-cloudinary'
import React, { ComponentProps, useOptimistic, useState, useTransition } from 'react'
import { satAsFavoriteAction } from '../app/action'
import { FullHeart } from '@/components/icon/FullHeart'
import { ImageMenu } from './ImageMenu'
interface CloudinaryImageProps extends Omit<ComponentProps<typeof CldImage>, 'src'> {
  id: string
  imageData: SearchResult,
  showMenu?: boolean
  onUnHeart?: (unHeartResource: SearchResult) => void
}

export const CloudinaryImage = ({
  id,
  imageData,
  onUnHeart,
  showMenu = true,
  ...props
}: CloudinaryImageProps) => {
  const [isPending, startTransition] = useTransition();
  const [isFavorited, setIsFavorited] = useState(
    (imageData.tags ?? []).includes('favorite')
  )

  // const [isFavorited, addOptimisticIsFavorited] = useOptimistic<boolean>(
  //   imageData.tags.includes('favorite'),
  //   (state: boolean, newState: boolean) => newState
  // )
  return (
    <div className='relative'>
      <CldImage
        src={id}
        {...props}
      />
      {isFavorited ? (
        <FullHeart
          onClick={() => {
            setIsFavorited(false)
            if (onUnHeart) {
              onUnHeart(imageData)
            }
            startTransition(async () => {
              // addOptimisticIsFavorited(false)
              await satAsFavoriteAction(id, true)
            })
          }}
          className='absolute top-2 left-2 cursor-pointer hover:text-white text-red-500' width={24} height={24}
        />
      ) : (
        <Heart
          onClick={() => {
            setIsFavorited(true)
            startTransition(async () => {
              // addOptimisticIsFavorited(true)
              await satAsFavoriteAction(id, false)
            })
          }}
          className='absolute top-2 left-2 cursor-pointer hover:text-red-500' width={24} height={24}
        />
      )}
      {showMenu && <ImageMenu imageData={imageData} />}
    </div>
  )
}

