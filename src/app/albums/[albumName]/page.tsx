import React from 'react'
import cloudinary from 'cloudinary'
import { ImageGrid } from '@/components/ImageGrid';
import { CloudinaryImage } from '@/components/CloudinaryImage';
import { FourceRefresh } from '@/components/FourceRefresh';

const AlbumDetailPage = async ({ params }: { params: { albumName: string } }) => {
  const { albumName } = params
  const results = await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute() as { resources: SearchResult[] };
  return (
    <div>
      <FourceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Album: {albumName}</h1>
        </div>
        <ImageGrid
          imageList={results.resources}
          getImage={resource => (
            <CloudinaryImage
              width="500"
              height="300"
              sizes="100vw"
              alt="Description of gallery "
              key={resource.public_id}
              id={resource.public_id}
              imageData={resource}
            />
          )}
        />
      </div>

    </div>
  )
}

export default AlbumDetailPage

