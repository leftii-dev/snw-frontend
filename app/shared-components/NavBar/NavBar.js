'use client'
import Image from 'next/image'
import logoImage from '../../../public/images/logo.jpg'
import Link from 'next/link'
import NavLink from './NavLink'
import { usePathname } from 'next/navigation'

export default function NavBar () {
    const currentPath = usePathname();
    const navRoutes = [
        {url: '/', text:'home'},
        {url: '/appointments', text:'appointments'},
        {url: '/account', text:'my account'},
        {url: '/about', text:'about us'}
    ]

    return (
        <nav className='flex flex-row justify-between'>
        <div id='logo-div' className=''>
          <Link href={'/'}>
            <Image
                className='w-44' 
                src={logoImage}
                alt='Shag n Wag Logo'
            />
          </Link>
        </div>
        <div  id='links' className='self-center'>
            <ul className='flex space-x-20'>
                {
                    navRoutes.map((navRoute) => (
                        <li key={navRoute.url}>
                            <NavLink active={currentPath === navRoute.url} href={navRoute.url} text={navRoute.text} />
                        </li>
                    ))
                }
            </ul>
        </div>
      </nav>
    )
}