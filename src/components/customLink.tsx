import Link from 'next/link'

export default function CustomLink({
  children,
  className,
  href = '#',
}: {
  children: React.ReactNode
  className?: string
  href?: string
}) {
  return href.startsWith('/') || href.startsWith('#') || href === '' ? (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  ) : (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
