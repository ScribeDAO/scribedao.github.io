import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import CustomLink from './customLink'

import { HEADER_NAV_LIST } from '../data/constants'

function Nav() {
  return (
    <nav>
      <section className="lg:container lg:mx-auto lg:px-20 xl:px-28 px-4 sm:px-8 md:px-18 my-5">
        <section className="flex justify-between items-center">
          <section>
            <CustomLink href="/">
              <Image
                src="/static/logo_footer.png"
                alt="ScribeDAO"
                width={180}
                height={35}
              />
            </CustomLink>
          </section>
          {/* lg nav bar */}
          <nav className="hidden md:flex items-baseline text-black space-x-8 md:text-base xl:text-lg">
            {HEADER_NAV_LIST.map(({ title, href, sublinks }) =>
              sublinks ? (
                <Popover key={title}>
                  {({ open }) => (
                    <>
                      <Popover.Button className="flex items-center">
                        <span>{title}</span>
                        <ChevronDownIcon className="h-4 w-4" />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition duration-200 ease-out">
                        <Popover.Panel className="absolute z-10 transform">
                          <section className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <section className="relative">
                              {sublinks.map((link) => (
                                <CustomLink key={title}>
                                  <p>{link.name}</p>
                                </CustomLink>
                              ))}
                            </section>
                          </section>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              ) : (
                <CustomLink key={title} href={href}>
                  <p>{title}</p>
                </CustomLink>
              )
            )}
          </nav>
        </section>
      </section>

      {/* mobile nav links :open */}
      <section className="md:hidden"></section>
      <hr />
    </nav>
  )
}

export default Nav
