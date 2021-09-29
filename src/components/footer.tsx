import React from 'react'
import Image from 'next/image'
import CustomLink from './customLink'

export default function Footer() {
  return (
    <aside className="bg-gray-50">
      <hr />
      <nav className="lg:container  my-8 sm:my-12 md:my-16 lg:mx-auto px-4 sm:px-8 md:px-16 lg:px-20 grid grid-cols-2 lg:gap-x-12 gap-y-6 md:grid-cols-4 lg:grid-cols-6">
        <div className="col-span-2 md:col-span-4 lg:col-span-2">
          <div className="mb-6 lg:mb-10 w-60 md:w-80 lg:w-60">
            <Image
              src="/static/logo_footer.png"
              alt="ScribeDAO"
              layout="responsive"
              width={180}
              height={35}
            />
          </div>
          <p className="mb-6 xl:text-lg">
            We summarize crypto articles that you don&apos;t have time to read
            entirely. Interested in Scribing with us?{' '}
            <CustomLink
              className="hover:text-gray-800 underline whitespace-nowrap"
              href="#">
              Apply here!
            </CustomLink>
          </p>
          <div>
            <h5>Connect with us</h5>
            <div>
              <CustomLink className="hover:text-gray-800 mr-4" href="#">
                <Image
                  src="/static/icons/twitter.png"
                  alt="Twitter"
                  width={25}
                  height={25}
                />
              </CustomLink>
              <CustomLink className="hover:text-gray-800 mr-4" href="#">
                <Image
                  src="/static/icons/github.png"
                  alt="Github"
                  width={25}
                  height={25}
                />
              </CustomLink>
              <CustomLink className="hover:text-gray-800 mr-4" href="#">
                <Image
                  src="/static/icons/discord.png"
                  alt="Discord"
                  width={25}
                  height={25}
                />
              </CustomLink>
            </div>
          </div>
        </div>
        {navList.map(({ title, items }) => (
          <div key={title}>
            <h5 className="">{title}</h5>
            <div className="flex flex-col">
              {items.map(({ name, href }) => (
                <CustomLink
                  key={name}
                  className="hover:text-gray-800 xl:text-lg mb-2 md:mb-3"
                  href={href}>
                  {name}
                </CustomLink>
              ))}
            </div>
          </div>
        ))}
      </nav>
      <hr />
      <footer className="lg:container lg:mx-auto xl:text-lg px-4 sm:px-8 md:px-16 lg:px-20 mb-4 sm:mb-8 md:mb-16 mt-8 sm:mt-12 md:mt-16 lg:flex">
        <p className="mb-2 lg:mb-0 lg:flex-1">
          © 2021 ScribeDAO. All Rights Reserved
        </p>
        <div>
          <CustomLink
            className="hover:text-gray-800 whitespace-nowrap"
            href="#">
            Privacy Policy
          </CustomLink>
          {' | '}
          <CustomLink
            className="hover:text-gray-800 whitespace-nowrap"
            href="#">
            Terms & Conditions
          </CustomLink>
          {' | '}
          <CustomLink
            className="hover:text-gray-800 whitespace-nowrap"
            href="#">
            Cookie Policy
          </CustomLink>
          {' | '}
          <CustomLink
            className="hover:text-gray-800 whitespace-nowrap"
            href="#">
            Disclaimer
          </CustomLink>
        </div>
      </footer>
    </aside>
  )
}

const navList = [
  {
    title: 'About',
    items: [
      { name: 'About', href: '#' },
      { name: 'Roadmap', href: '#' },
      { name: 'Mission', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Governance', href: '#' },
      { name: 'Team', href: '#' }
    ]
  },
  {
    title: 'Discover',
    items: [
      { name: 'Learn', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Forum', href: '#' },
      { name: 'Github', href: '#' },
      { name: 'Newsletter', href: '#' },
      { name: 'Downloads', href: '#' }
    ]
  },
  {
    title: 'Support',
    items: [
      { name: 'Docs', href: '#' },
      { name: "FAQ's", href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Discord Support', href: '#' }
    ]
  },
  {
    title: 'Other Links',
    items: [
      { name: 'Partners', href: '#' },
      { name: 'SCRIBE Token', href: '#' },
      { name: 'Token Utilities', href: '#' }
    ]
  }
]
