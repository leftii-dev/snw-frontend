import Link from 'next/link'

export default function NavLink({href, text, active}) {
    return (
        <>
            <Link href={href} className='peer uppercase font-text whitespace-nowrap'>{text}</Link>
            <div className={`border-b-black border-b transition-all duration-200 ease-in ${active ? 'w-4' : 'w-0 peer-hover:w-4 peer-hover:border-b-gray-400'}`}></div>
        </>
    )
}