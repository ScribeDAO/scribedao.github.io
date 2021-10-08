import React, { Fragment, useState } from 'react'
import { Dialog, Menu, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import CustomLink from '../customLink'
import ScribeDAOLogo from '../../../public/static/ScribeDAO_Logo.svg'

import { HEADER_NAV_LIST } from '../../data/constants'
import HeaderNav from './headerNav'
import MobileSideNavMenu from './mobileSideNavMenu'

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  return (
    <nav>
      <section className="lg:container lg:mx-auto lg:px-20 xl:px-28 px-4 sm:px-8 md:px-18 my-5">
        <section className="flex justify-between items-center">
          <section>
            <CustomLink href="/">
              <Image
                src={ScribeDAOLogo}
                alt="ScribeDAO"
                width={180}
                height={35}
              />
            </CustomLink>
          </section>

          {/* md breakpoint nav bar */}
          <HeaderNav menuItems={HEADER_NAV_LIST} />
          {/* mobile view hamburger menu */}
          <Popover
            as="div"
            className="-mr-2 -my-2 md:hidden"
            onClick={() => {
              setIsMobileMenuOpen(true)
            }}>
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </Popover>
        </section>
      </section>

      {/* mobile nav links :open */}
      <MobileSideNavMenu
        show={!!isMobileMenuOpen}
        onClose={setIsMobileMenuOpen}
      />
      <hr />
    </nav>
  )
}
