'use client'
import Image from 'next/image'
import logoImage from '../../../public/images/logo.jpg'
import Link from 'next/link'
import NavLink from './NavLink'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Bars from '@iconscout/react-unicons/icons/uil-bars'
import Close from '@iconscout/react-unicons/icons/uil-multiply'

export default function NavBar () {
    const [expanded, setExpanded] = useState(false)
    const currentPath = usePathname()
    const navRoutes = [
        {url: '/', text:'home'},
        {url: '/appointments', text:'appointments'},
        {url: '/account', text:'my account'},
        {url: '/about', text:'about us'}
    ]

    return (
        <nav className='flex w-full flex-col flex-shrink items-center py-4  lg:flex-row lg:w-10/12 lg:mx-auto'>
            <div id='logo-div' className='lg:w-1/2 lg:justify-start'>
            <Link href={'/'}>
                <Image
                    className='min-w-min'
                    src={logoImage}
                    width={176}
                    height={194.75}
                    alt='Shag n Wag Logo'
                />
            </Link>
            </div>
            {/* Add mobile view of nav links */}
            <div  id='links' className={`${expanded ? 'flex-grow w-full ' : '' }lg:w-auto lg:flex-grow`}>
                {
                    expanded 
                    ?
                        <Close size={40} color='black' onClick={() => setExpanded(false)} className='ml-auto w-full hover:cursor-pointer hover:scale-90 lg:hidden' />
                    :
                        <Bars size={40} color='black' onClick={() => setExpanded(true)} className='ml-auto w-full hover:cursor-pointer hover:scale-90 lg:hidden' />
                }
                        <ul className={`${!expanded ? 'hidden' : ''} flex-col flex-grow items-center lg:flex lg:flex-row lg:justify-between lg:ml-10`}>
                        {
                            navRoutes.map((navRoute) => (
                                <li key={navRoute.url} className='py-2 border-b w-full lg:w-auto lg:border-b-0'>
                                    <NavLink active={currentPath === navRoute.url} href={navRoute.url} text={navRoute.text} />
                                </li>
                            ))
                        }
                        </ul>
                
            </div>
      </nav>
      
    )
}