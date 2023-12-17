
import { CldImage, CldUploadButton } from 'next-cloudinary'
import React, { useState } from 'react'
import { UploadButton } from '../../components/UploadButton'
import cloudinary from 'cloudinary'
import { CloudinaryImage } from '../../components/CloudinaryImage';
import { FourceRefresh } from '@/components/FourceRefresh';
import { FavoriteList } from './favoriteList';


async function GalleryPage() {
  const results = await cloudinary.v2.search
    .expression('resource_type:image AND tags=favorite')
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(30)
    .execute() as { resources: SearchResult[] };
  return (
    <section>
      <FourceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favorite</h1>
        </div>
        <FavoriteList initialResources={results.resources} />
      </div>
    </section>
  )
}

export default GalleryPage