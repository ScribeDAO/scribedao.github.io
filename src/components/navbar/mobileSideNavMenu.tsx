import React, { Fragment } from 'react'
import { Transition, Dialog, Menu } from '@headlessui/react'
import { XIcon, ChevronDownIcon } from '@heroicons/react/solid'

import CustomLink from '../customLink'
import MenuItemProps from '../../shared/IMenuItems'

export default function MobileSideNavMenu({
  show,
  onClose,
  menuItems
}: {
  show: boolean
  onClose: Function
  menuItems: MenuItemProps
}) {
  return (
    <Transition show={show} as={Fragment}>
      <Dialog
        as="aside"
        className="fixed inset-0 overflow-hidden"
        onClose={onClose}>
        <div className="absolute inset-0 overflow-hidden">
          {/* grey overlay */}
          <Transition.Child>
            <Dialog.Overlay className="absolute inset-0 bg-gray-800 bg-opacity-60 transition opacity" />
          </Transition.Child>
          {/* mobile menu */}
          <div className="fixed inset-y-0 right-0 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transition slide-in duration-400"
              enterFrom="opacity-90"
              enterTo="opacity-100"
              leave="transition slide-out duration-400"
              leaveFrom="opacity-100"
              leaveTo="opacity-100">
              <div className="relative w-screen h-screen max-w-xs md:max-w-md">
                <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() => onClose()}>
                    <span className="sr-only">Close panel</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <section className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <nav className="relative mt-2 sm:px-6 grid grid-cols-1 justify-start">
                    {menuItems.map(({ title, href, sublinks }) =>
                      sublinks ? (
                        <Menu
                          as="div"
                          key={title}
                          className="relative border-b border-solid border-black border-1 border-opacity-20">
                          {({ open }) => (
                            <>
                              <Menu.Button className="flex items-center justify-between">
                                <h5 className="my-4 ml-6">{title}</h5>
                                <ChevronDownIcon className="h-4 w-4" />
                              </Menu.Button>
                              {open && (
                                <Transition.Child
                                  as={Fragment}
                                  enter="transition duration-300 ease-in-out"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in-out duration-300"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0">
                                  <Menu.Items className="transform border-t border-solid border-black border-1 border-opacity-20">
                                    {sublinks.map(({ title, href }) => (
                                      <Menu.Item key={title} as="section">
                                        <CustomLink href={href}>
                                          <h5 className="font-normal text-gray-600 my-4 ml-6">
                                            {title}
                                          </h5>
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
                        <CustomLink
                          key={title}
                          href={href}
                          className="border-b border-solid border-black border-1 border-opacity-20">
                          <h5 className="my-4 ml-6">{title}</h5>
                        </CustomLink>
                      )
                    )}
                  </nav>
                </section>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
