'use client'
import React, { useEffect, useState } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'

const Counter = () => {
  const [count, setCount] = useState<number>(0)
  console.log('A')
  useEffect(() => {
    console.log('B')
    return () => {
      console.log('C')
    }
  }, [count])
  console.log('D')
  return (
    <>
      {console.log('E')}
      <button onClick={() => setCount(count + 1)}> + 1</button>
    </>
  )
}
//  A D E C B
export const Header = () => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        PHOTO APP
        <div className="ml-auto flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )


}

