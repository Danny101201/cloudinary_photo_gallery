import React, { useEffect } from 'react'
import { CloudinaryImage } from './CloudinaryImage'
interface ImageGridProps {
  imageList: SearchResult[],
  getImage: (resource: SearchResult) => React.JSX.Element
}
const MAX_COLUMNS = 4
export const ImageGrid = ({ imageList, getImage }: ImageGridProps) => {
  function getColumns(colIndex: number) {
    return imageList.filter((resource, index) => index % MAX_COLUMNS === colIndex)
  }
  return (
    <div className='grid grid-cols-4 gap-4'>
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map((column, index) => (
        <div key={index} className='flex flex-col gap-4'>
          {column.map(getImage)}
        </div>
      ))}
    </div>
  )
}
