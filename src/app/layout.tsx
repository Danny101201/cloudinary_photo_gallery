import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SideBar } from '@/components/SideBar'
import cloudinary from 'cloudinary'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { folders } = await cloudinary.v2.api.root_folders() as GetRootFolderResponse
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Header />
        <div className='flex'>
          <SideBar folders={folders} />
          <div className='w-full px-4 pt-12'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
