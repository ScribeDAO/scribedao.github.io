import React from "react"

import Image from 'next/image'
import CustomLink from "./customLink"

import { HEADER_NAV_LIST } from '../data/constants'

function Nav() {
  return (
      <nav>
        <section className="lg:container lg:mx-auto lg:px-20 px-4 sm:px-8 md:px-18 my-5">
          <section className="flex justify-between">
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
            <nav className="hidden md:flex text-black space-x-8">
              {HEADER_NAV_LIST.map(({ title, href }) => (
                <CustomLink
                  key={title}
                  href={href}
                >
                  <h5>{title}</h5>
                </CustomLink>
              ))}
            </nav>
          </section> 

        </section>

        {/* mobile nav links :open */}
        <section className="md:hidden">

        </section>
        <hr />
      </nav>
  );
}

export default Nav
