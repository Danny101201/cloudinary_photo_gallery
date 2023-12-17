'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface SearchFormProps {
  initialSearch: string
}
export const SearchForm = ({ initialSearch }: SearchFormProps) => {
  const [search, setSearch] = useState<string>(initialSearch ?? '')
  const router = useRouter()
  console.log(initialSearch)
  useEffect(() => {
    setSearch(initialSearch ?? '')
  }, [initialSearch])
  return (
    <form onSubmit={e => {
      e.preventDefault()
      router.replace(`/gallery?search=${search}`)
      router.refresh()
    }}>
      <Label htmlFor="name" className="text-right">
        Search by tag
      </Label>
      <div className='flex gap-[1rem]'>
        <Input id="name" value={search} className="col-span-3" onChange={e => setSearch(e.target.value)} />
        <Button type='submit'>search</Button>
      </div>
    </form>
  )
}

