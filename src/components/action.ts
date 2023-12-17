'use server'
import cloudinary from 'cloudinary'
import { revalidatePath } from 'next/cache'
type CreateFolderResponse = {
  success: boolean,
  path: string,
  name: string,
  rate_limit_allowed: number,
  rate_limit_reset_at: Date,
  rate_limit_remaining: number
}
export const addImageToAlbum = async (folder: string, imageSource: SearchResult) => {
  const newFolder = await cloudinary.v2.api.create_folder(folder) as CreateFolderResponse
  await cloudinary.v2.uploader.rename(imageSource.public_id, `${folder}/${imageSource.filename}`)
  revalidatePath('/albums/[albumName]', 'page')
}