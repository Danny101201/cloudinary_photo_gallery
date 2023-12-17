'use client'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { MenuIcon } from './icon/MenuIcon'
import { AddIcon } from './icon/AddIcon'
import { AddAlbumDialog } from './addAlbumDialog'
import Link from 'next/link'
import { EditIcon } from './icon/EditIcon'
interface ImageMenuProps {
  imageData: SearchResult
}

export const ImageMenu = ({ imageData }: ImageMenuProps) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className='absolute top-2 right-2'>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant='secondary' className='w-12 h-10'>
            <MenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=' bg-secondary mt-2 z-40 flex flex-col gap-4 p-2'>
          <DropdownMenuItem className='flex items-center justify-start gap-4 cursor-pointer ' asChild>
            <AddAlbumDialog imageData={imageData} onCloseDialog={() => setOpen(false)} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/edit?public_id=${encodeURIComponent(imageData.public_id)}`}>
              <div className="flex items-center  gap-5">
                <EditIcon />
                <span>edit</span>
              </div>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

  )
}
