'use client'

import React, { ComponentProps } from 'react'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface SideBarItemProps {
  path: string,
  text: string,
  Icon?: (props: ComponentProps<'svg'>) => React.JSX.Element
}

export const SideBarItem = ({
  path,
  Icon,
  text
}: SideBarItemProps) => {
  const pathName = usePathname()

  return (
    <Button asChild variant={pathName === path ? 'secondary' : 'ghost'} className="w-full justify-start gap-2">
      <Link href={path}>
        {Icon && (
          React.createElement(Icon, { width: 12, height: 12, color: 'white' })
        )}
        {text}
      </Link>
    </Button>
  )
}