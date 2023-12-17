'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export const FourceRefresh = () => {
  const router = useRouter()
  useEffect(() => {
    router.refresh()
  }, [router])
  return (
    <></>
  )
}

