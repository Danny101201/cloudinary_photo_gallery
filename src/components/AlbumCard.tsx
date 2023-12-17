import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'
import { Button } from './ui/button'
import { GetRootFolderResponse } from '@/app/albums/page'
import Link from 'next/link'
interface AlbumCardProps {
  folder: {
    name: string;
    path: string;
  }
}
export const AlbumCard = ({ folder }: AlbumCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>All your {folder.name} images</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={`/albums/${folder.name}`}>
          <Button variant='default' >View Album</Button>
        </Link>
      </CardFooter>
    </Card>

  )
}
