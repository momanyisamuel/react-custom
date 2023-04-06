import React, {HTMLAttributes, ReactNode} from 'react'
import Link from 'next/link'

type NavItem = {
    href: string;
    text: string;
}

type NavigationProps = {
    links: NavItem[]
}

interface NavItemProps extends HTMLAttributes<HTMLAnchorElement> {
    navItem: NavItem
    navIcon: JSX.Element
}

export default function Navigation({links, ...props}: NavigationProps) {
  return (
    <div>
        <nav className="" {...props}>
            {links.map(link => <NavItem navItem={links}/>)}
        </nav>
    </div>
  )
}

function NavItem({navItem, navIcon, ...props}: NavItemProps)  {
    return (
        <div className='font-semibold inline-flex flex-row justify-center align-middle text-left text-gray-700 rounded-sm py-1.5 px-3 min-w-[30px] min-h-[30px] hover:ease-in hover:shadow-sm'>
            <span className="inline-flex">
                {navIcon}
            </span>
            <Link href={navItem.href} className="" {...props}>
                {navItem.text}
            </Link>
        </div>
    )
}

