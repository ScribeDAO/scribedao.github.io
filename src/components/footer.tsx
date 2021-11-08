import Image from 'next/image'
import CustomLink from './customLink'
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa'

// import { FOOTER_NAV_LIST } from '../data/constants'

export default function Footer() {
  return (
    <aside className="bg-gray-50">
      <hr />
      <nav className="lg:container  my-8 sm:my-12 md:my-16 lg:mx-auto px-4 sm:px-8 md:px-16 lg:px-20 grid grid-cols-2 lg:gap-x-12 gap-y-6 md:grid-cols-4 lg:grid-cols-6">
        <div className="col-span-2 md:col-span-4 lg:col-span-2">
          <div className="mb-6 lg:mb-10 w-60 md:w-80 lg:w-60">
            <Image
              src="/static/ScribeDAO_Logo.svg"
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
            <div className="flex">
              <CustomLink className="hover:text-gray-800 mr-4" href="#">
                <FaTwitter className="text-2xl" />
              </CustomLink>
              <CustomLink className="hover:text-gray-800 mr-4" href="#">
                <FaGithub className="text-2xl" />
              </CustomLink>
              <CustomLink className="hover:text-gray-800 mr-4" href="#">
                <FaDiscord className="text-2xl" />
              </CustomLink>
            </div>
          </div>
        </div>
        {/* {FOOTER_NAV_LIST.map(({ title, items }) => (
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
        ))} */}
      </nav>
      <hr />
      <footer className="lg:container lg:mx-auto xl:text-lg px-4 sm:px-8 md:px-16 lg:px-20 mb-4 sm:mb-8 md:mb-16 mt-8 sm:mt-12 md:mt-16 lg:flex">
        <p className="mb-2 lg:mb-0 lg:flex-1">
          © {new Date().getFullYear()} ScribeDAO. All Rights Reserved
        </p>
        <div>
          {/* <CustomLink
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
          </CustomLink> */}
        </div>
      </footer>
    </aside>
  )
}
