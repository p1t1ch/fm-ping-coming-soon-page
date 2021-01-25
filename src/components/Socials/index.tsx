import React, { Children } from 'react'

interface SocialsProps extends React.HTMLProps<HTMLUListElement> {
  children: React.ReactNode
}

function Socials({ children, className = '', ...props }: SocialsProps) {
  return (
    <ul className={`grid grid-flow-col gap-3 lg:gap-4 ${className}`} {...props}>
      {Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ul>
  )
}

export default Socials
