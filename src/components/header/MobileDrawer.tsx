import React, { useState } from 'react'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import RcDrawer from 'rc-drawer'
import { data } from './Header.data'
import { Link } from 'react-scroll'

const MobileDrawer: React.FC<{}> = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <React.Fragment>
      <RcDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen((prevState) => !prevState)}
        width="320px"
        handler={false}
        duration={'0.4s'}
      >
        <div className="space-y-24">
          <div className="relative">
            <button
              className="absolute right-5 -bottom-3"
              onClick={() => setIsDrawerOpen((prevState) => !prevState)}
            >
              <IoMdClose className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          <div className="flex flex-col divide-y px-8 w-full">
            {data.map((item, i) => (
              <Link
                activeClass="active"
                to={item.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
                className="text-base font-medium cursor-pointer hover:text-[#ea3a60] text-gray-600 py-4"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </RcDrawer>
      <button
        className="block md:hidden"
        onClick={() => setIsDrawerOpen((prevState) => !prevState)}
      >
        <IoMdMenu className="w-6 h-6" />
      </button>
    </React.Fragment>
  )
}

export default MobileDrawer
