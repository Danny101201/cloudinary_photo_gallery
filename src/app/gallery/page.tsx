
import React, { useState } from 'react'
import { UploadButton } from '../../components/UploadButton'
import cloudinary from 'cloudinary'
import { CloudinaryImage } from '../../components/CloudinaryImage';
import { ImageGrid } from '../../components/ImageGrid';
import { SearchForm } from './SearchForm';

async function GalleryPage({ searchParams }: { searchParams: { search: string } }) {
  const { search } = searchParams
  const results = await cloudinary.v2.search
    .expression(`resource_type:image ${search ? `AND tags=${search}` : ''} `)
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(30)
    .execute() as { resources: SearchResult[] };
  const result = await cloudinary.v2.api.resource('woman/rdezu1i3ro6z0kpckekj')
  console.log(result)
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>
        <SearchForm initialSearch={search} />
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

        {/* <GalleryGrid images={results.resources} /> */}
      </div>
    </section>
  )
}

export default GalleryPage