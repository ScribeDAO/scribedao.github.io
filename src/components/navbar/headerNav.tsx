import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import CustomLink from '../customLink'
import MenuItemProps from '../../shared/IMenuItems'

export default function HeaderNav({ menuItems }: MenuItemProps) {
  return (
    <Popover
      as="nav"
      className="hidden md:flex items-baseline text-black space-x-8 md:text-base xl:text-lg">
      {menuItems.map(({ title, href, sublinks }) =>
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
                            key={link.title}
                            href={link.href}
                            className="m-1">
                            <p>{link.title}</p>
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
  )
}
