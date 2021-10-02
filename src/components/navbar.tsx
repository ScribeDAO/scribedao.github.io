import React, { Fragment, useState } from 'react'
import { Dialog, Menu, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import CustomLink from './customLink'

import { HEADER_NAV_LIST } from '../data/constants'

function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

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
          <Popover
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
                        show={!!open}
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
          </Popover>

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
      {/* <section className="md:hidden">x</section> */}
      <Transition show={!!isMobileMenuOpen} as={Fragment}>
        <Dialog
          as="aside"
          className="fixed inset-0 overflow-hidden"
          onClose={setIsOpen}>
          <div className="absolute inset-0 overflow-hidden">
            {/* grey overlay */}
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="absolute inset-0 bg-gray-100 bg-opacity-50 transition opacity" />
            </Transition.Child>
            {/* mobile menu */}
            <div className="fixed inset-y-0 right-0 max-w-full flex">
              <Transition.Child>
                <div className="relative w-screen max-w-md">
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() =>
                        setIsMobileMenuOpen(
                          (isMobileMenuOpen) => !isMobileMenuOpen
                        )
                      }>
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <section className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                    <div className="px-4 sm:px-6">top of da menu</div>
                    <div className="mt-6 relative flex-1 px-4 sm:px-6 grid grid-cols-1">
                      {HEADER_NAV_LIST.map(({ title, href, sublinks }) =>
                        sublinks ? (
                          <Menu as="div" key={title} className="relative">
                            {({ open }) => (
                              <>
                                <Menu.Button className="flex items-center justify-between my-2">
                                  <span>{title}</span>
                                  <ChevronDownIcon className="h-4 w-4" />
                                </Menu.Button>
                                {open && (
                                  <Transition.Child
                                    as={Fragment}
                                    enter="transition duration-200 ease-out"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1">
                                    <Menu.Items className="transform">
                                      {sublinks.map(({ name, href }) => (
                                        <Menu.Item key={name} as="section">
                                          <CustomLink href={href}>
                                            {name}
                                          </CustomLink>
                                        </Menu.Item>
                                      ))}
                                    </Menu.Items>
                                  </Transition.Child>
                                )}
                              </>
                            )}
                          </Menu>
                        ) : (
                          <CustomLink key={title} href={href} className="my-2">
                            <p>{title}</p>
                          </CustomLink>
                        )
                      )}
                    </div>
                  </section>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <hr />
    </nav>
  )
}

export default Nav
