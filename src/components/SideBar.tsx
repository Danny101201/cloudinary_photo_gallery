'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { SideBarItem } from './SideBarItem'
import { PictureIcon } from './icon/PictureIcon'
import { AlbumIcon } from './icon/AlbumIcon'
import { StartIcon } from './icon/StartIcon'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@radix-ui/react-collapsible'
import { Link } from 'lucide-react'
import path from 'path'
import { text } from 'stream/consumers'
import { Button } from './ui/button'

interface SideBarProps {
  folders: Folder[]
}
export const SideBar = ({ folders }: SideBarProps) => {
  const pathName = usePathname()
  return (
    <div className='pb-12 w-1/5'>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <SideBarItem path='/gallery' text='Gallery' Icon={PictureIcon} />
            <Collapsible >
              <CollapsibleTrigger>
                {/* <Button asChild variant={pathName === path ? 'secondary' : 'ghost'} className="w-full justify-start gap-2"> */}
                <Button asChild variant={'ghost'} className="w-full justify-start gap-2">
                  <div className='flex'>
                    <AlbumIcon />
                    Albums
                  </div>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className='pl-4'>
                {folders.map(folder => (
                  < SideBarItem key={folder.name} path={`/albums/${folder.path}`} text={folder.name} />
                ))}
              </CollapsibleContent>
            </Collapsible>
            <SideBarItem path='/albums' text='AllAlbums' Icon={AlbumIcon} />
            <SideBarItem path='/favorite' text='Favorites' Icon={StartIcon} />
          </div>
        </div>
      </div>
    </div>
  )
}