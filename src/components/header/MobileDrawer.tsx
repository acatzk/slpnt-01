import RcDrawer from 'rc-drawer'
import { Link } from 'react-scroll'
import React, { useState } from 'react'
import { data, social } from './Header.data'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { Scrollbars } from 'react-custom-scrollbars'

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
        <Scrollbars autoHide>
          <div
            className="flex justify-between flex-col px-8 mt-6"
            style={{ height: '92vh' }}
          >
            <div className="flex flex-col space-y-12">
              <div className="ml-auto">
                <button
                  onClick={() => setIsDrawerOpen((prevState) => !prevState)}
                >
                  <IoMdClose className="w-6 h-6 text-black" />
                </button>
              </div>
              <div className="flex flex-col divide-y">
                {data.map((item, i) => (
                  <Link
                    activeClass="active"
                    to={item.path}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    key={i}
                    className="text-base font-medium cursor-pointer hover:text-[#2563ff] text-gray-700 py-4"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-3 mx-auto">
              {social.map(({ path, Icon }, i) => (
                <Link to={path} key={i}>
                  <Icon className="w-4 h-4 cursor-pointer text-[#343d48] hover:text-[#2563ff] transition ease-in-out duration-150" />
                </Link>
              ))}
            </div>
          </div>
        </Scrollbars>
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
