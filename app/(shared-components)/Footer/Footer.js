'use client'
import { IconContext } from 'react-icons'
import { FaFacebook, FaFacebookMessenger, FaSquareInstagram, FaPhoneFlip, FaEnvelope, FaTiktok } from 'react-icons/fa6'

export default function Footer() {
    console.log('Footer Rendered')
    return (
        <footer className='flex flex-grow bg-[#ECBE9C]'>
            <div id="footer-content-wrapper" className='w-10/12 mx-auto lg:pt-5'>
                <div className='flex flex-row w-full'>
                    <div id='footer-phrase' className='flex flex-col lg:w-1/3 lg:p-3'>
                        <p className='font-display text-3xl text-[#17568E]'>
                            We Care For Your Dog&apos;s Hair
                        </p>
                    </div>
                    <div id='footer-socials' className='flex flex-col w-1/3 justify-center items-center'>
                            <h1 className='font-text text-lg  border-b border-b-black'>Check Us Out On Social Media!</h1>
                            <div className='flex flex-row flex-grow p-3'>
                                <IconContext.Provider value={{className: 'shared-class', size: 40, color: '#17568E'}}>
                                    <ul className='flex space-x-5'>
                                        <li><a href={'https://www.facebook.com/shaggynwag'}><FaFacebook /></a></li>
                                        <li><a href={'https://www.instagram.com/shaggynwag/'}><FaSquareInstagram /></a></li>
                                        <li><a href={'https://www.tiktok.com/@shaggynwag'}><FaTiktok /></a></li>
                                    </ul>
                                </IconContext.Provider>
                            </div>
                    </div>
                    <div id='footer-contact' className='flex flex-col w-1/3 justify-end items-end'>
                        <h1 className='font-text text-lg border-b border-b-black'>We&apos;d Love To Hear From You!</h1>
                        <div className='flex flex-row flex-grow p-3'>
                            <IconContext.Provider value={{className: 'shared-class', size: 20, color: '#17568E'}}>
                                
                                <ul className='flex flex-col space-y-4'>
                                    <li><a className='group space-x-2' href='tel:916-519-3557'><FaPhoneFlip className='inline-flex'/><span className='font-text font-light group-hover:text-slate-50'>(916) 519-3557</span></a></li>
                                    <li><a className='group space-x-2' href='mailto:Shaggynwag@gmail.com'><FaEnvelope className='inline-flex'/><span className='font-text font-light group-hover:text-slate-50'>Shaggynwag@gmail.com</span></a></li>
                                    <li><a className='group space-x-2' href='http://m.me/shaggynwag/'><FaFacebookMessenger className='inline-flex'/><span className='font-text font-light group-hover:text-slate-50'>Chat With Us!</span></a></li>
                                </ul>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            <p className='w-full text-center border-t border-t-black'>Copyright &copy; 2023 Shag n Wag, LLC California, USA. All Rights Reserved</p>
            </div>
        </footer>
    )
}