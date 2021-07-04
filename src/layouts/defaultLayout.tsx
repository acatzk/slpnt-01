import SEO from '~/components/SEO'
import Sticky from 'react-stickynode'
import React, { useState } from 'react'
import Header from '~/components/header/Header'

const Layout: React.FC<{}> = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false)

  const handleStateChange = (status: any) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true)
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false)
    }
  }

  return (
    <div style={{ height: '6000px' }}>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header
          className={`${
            isSticky ? 'shadow-md' : 'shadow-none'
          } transition ease-in-out duration-300`}
        />
      </Sticky>
      <SEO title="NextJS Landing Page" />
      <main>{children}</main>
    </div>
  )
}

export default Layout
