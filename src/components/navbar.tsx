import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, MenuIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import CustomLink from './customLink'

import { HEADER_NAV_LIST } from '../data/constants'

function Nav() {
  return (
    <Popover>
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
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          {/* lg nav bar */}
          <Popover.Group
            as="nav"
            className="hidden md:flex items-baseline text-black space-x-8 md:text-base xl:text-lg">
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
                        enter="transition duration-200 ease-out"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1">
                        <Popover.Panel className="absolute z-10 transform">
                          <section className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <section className="relative px-5 py-2 bg-white">
                              {sublinks.map((link) => (
                                <CustomLink
                                  key={link.name}
                                  href={link.href}
                                  className="m-1">
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
          </Popover.Group>
        </section>
      </section>

      {/* mobile nav links :open */}
      {/* <section className="md:hidden">x</section> */}
      <hr />
    </Popover>
  )
}

export default Nav
