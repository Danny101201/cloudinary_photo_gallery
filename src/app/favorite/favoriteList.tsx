'use client'
import React, { useEffect, useState } from 'react'
import { CloudinaryImage } from '../../components/CloudinaryImage'
import { ImageGrid } from '../../components/ImageGrid'
interface FavoriteListProps {
  initialResources: SearchResult[]
}
export const FavoriteList = ({ initialResources }: FavoriteListProps) => {
  const [resources, setResources] = useState(initialResources)
  useEffect(() => {
    setResources(initialResources)
  }, [initialResources])
  return (
    <ImageGrid
      imageList={resources}
      getImage={resource => (
        <CloudinaryImage
          width="500"
          height="300"
          sizes="100vw"
          alt="Description of my image"
          key={resource.public_id}
          id={resource.public_id}
          imageData={resource}
          onUnHeart={(UnHeartResource) => {
            setResources(currentResource => currentResource.filter(resource => resource.public_id !== UnHeartResource.public_id))
          }}
        />
      )}
    />
  )
}
