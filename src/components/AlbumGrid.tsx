import React from 'react'
import { AlbumCard } from './AlbumCard'
interface AlbumGridProps {
  folders: Folder[]
}
export const AlbumGrid = ({ folders }: AlbumGridProps) => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      {folders.map(folder => (
        <AlbumCard folder={folder} key={folder.name} />
      ))}
    </div>
  )
}

