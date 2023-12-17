'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AddIcon } from "./icon/AddIcon"
import { useState } from "react"
import { addImageToAlbum } from "./action"
interface AddAlbumDialogProps {
  imageData: SearchResult,
  onCloseDialog: () => void
}
export const AddAlbumDialog = ({ imageData, onCloseDialog }: AddAlbumDialogProps) => {
  const [albumName, setAlbumName] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Dialog open={open} onOpenChange={(state) => {
      setOpen(state)
      if (!state) {
        onCloseDialog()
      }
    }}>
      <DialogTrigger asChild>
        <div className="flex items-center justify-center gap-5">
          <AddIcon />
          <span>Add to Album</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" >
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
            Type an album you want to move this image into
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input id="name" value={albumName} className="col-span-3" onChange={e => setAlbumName(e.target.value)} />
          </div>
        </div>
        <DialogFooter>
          {/* <DialogClose asChild> */}
          <Button
            type="submit"
            onClick={async () => {
              setOpen(false)
              onCloseDialog()
              await addImageToAlbum(albumName, imageData)
            }}
          >Add Album</Button>
          {/* </DialogClose> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
