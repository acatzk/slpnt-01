import React from 'react'
import { Link } from 'react-scroll'
import { data } from './Header.data'
import Logo from '~/components/Logo'
import LogoDark from '~/assets/logo.svg'
import MobileDrawer from './MobileDrawer'

interface HeaderProps {
  className: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={`${className} bg-white py-4 transition ease-in-out duration-300`}
    >
      <div className="flex items-center justify-between px-5 mx-auto max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="flex-shrink-0">
          <Logo src={LogoDark} />
        </div>
        <div className="hidden md:block">
          <div className="flex items-center space-x-6">
            {data.map((item, i) => (
              <Link
                activeClass="active"
                to={item.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
                className="text-base cursor-pointer hover:text-[#ea3a60] text-gray-600"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <button
            className="py-3 px-7 scale-75 md:scale-95 rounded-full font-medium text-[#ea3a60] hover:text-white bg-white border-2 border-[#ea3a60] hover:bg-[#ea3a60] transition ease-in-out duration-300 focus:outline-none"
            aria-label="Get Started"
          >
            Get Started
          </button>
          <MobileDrawer />
        </div>
      </div>
    </header>
  )
}

export default Header
