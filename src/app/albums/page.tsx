
import React from 'react'
import cloudinary from 'cloudinary'
import { AlbumGrid } from '@/components/AlbumGrid';


async function AlbumsPage() {
  const { folders } = await cloudinary.v2.api.root_folders() as GetRootFolderResponse

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Albums</h1>
        </div>
        <AlbumGrid folders={folders} />
      </div>
    </section>
  )
}

export default AlbumsPage