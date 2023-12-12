import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/chat', label: 'chat' },
  { href: '/tours', label: 'tours' },
  { href: '/tours/new-tour', label: 'new tour' },
  { href: '/profile', label: 'profile' },
]

const NavLinks = () => {
  return (
    <div className='menu text-base-content'>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.href}>
              <Link href={link.href} className='capitalize'>
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavLinks
