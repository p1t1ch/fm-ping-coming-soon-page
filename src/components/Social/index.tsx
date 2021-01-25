import React from 'react'
import { IconType } from 'react-icons'

interface SocialProps extends React.HTMLProps<HTMLAnchorElement> {
  Icon: IconType
  name: string
  link: string
}

function Social({ Icon, name, link, className = '', ...props }: SocialProps) {
  return (
    <a
      href={link}
      className={`grid place-items-center w-8 h-8 rounded-full text-primary border border-primary border-opacity-15 hover:text-white hover:bg-primary hover:border-opacity-100 focus-visible:text-white focus-visible:bg-primary focus-visible:border-opacity-100 transition-colors ${className}`}
      target="_blank"
      rel="nofollow noopener noreferrer"
      {...props}
    >
      <Icon title={name} />
    </a>
  )
}

export default Social
