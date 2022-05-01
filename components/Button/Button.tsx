import React, { ReactNode } from 'react'

type Props = { children: ReactNode; width?: string }

const Button = ({ children, width }: Props) => {
  return (
    <button
      className={`${width} text-[#00D9DB"] rounded-full bg-[#1D9BF0] p-3 text-base font-bold hover:bg-[#1A8CD8]`}
    >
      {children}
    </button>
  )
}

export default Button
