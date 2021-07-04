import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  src: string
  rest?: any
}

const Logo: React.FC<LogoProps> = ({ src, ...rest }) => {
  return (
    <Link href="/" {...rest}>
      <a className="w-full h-full">
        <Image src={src} width={180} height={50} alt="NextJS Landing Page" />
      </a>
    </Link>
  )
}

export default Logo
