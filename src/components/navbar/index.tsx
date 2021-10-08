import React, { useState } from 'react'
import Image from 'next/image'
import CustomLink from '../customLink'
import ScribeDAOLogo from '../../../public/static/ScribeDAO_Logo.svg'

import { HEADER_NAV_LIST } from '../../data/constants'
import HeaderNav from './headerNav'
import MobileSideNavMenu from './mobileSideNavMenu'
import MobileMenuToggle from './mobileMenuToggle'

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  return (
    <nav>
      <section className="lg:container lg:mx-auto lg:px-20 xl:px-28 px-4 sm:px-8 md:px-18 my-5">
        <section className="flex justify-between items-center">
          <CustomLink href="/">
            <Image
              src={ScribeDAOLogo}
              alt="ScribeDAO"
              width={180}
              height={35}
            />
          </CustomLink>

          <HeaderNav menuItems={HEADER_NAV_LIST} />

          <MobileMenuToggle toggle={setIsMobileMenuOpen} />
        </section>
      </section>

      {/* mobile nav links :open */}
      <MobileSideNavMenu
        show={!!isMobileMenuOpen}
        onClose={setIsMobileMenuOpen}
        menuItems={HEADER_NAV_LIST}
      />
      <hr />
    </nav>
  )
}
