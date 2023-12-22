'use client'
import { FaX } from 'react-icons/fa6'
import Image from 'next/image'
import googleLoginImage from '../../../public/images/google-signin.svg'
export default function LoginModal({ handleSignIn, setShowModal, showModal, loginError }) {
    console.log('LoginModal Rendered')
        return(
            <div 
                id='modal-div'
                className={`${showModal ? 'flex' : 'hidden'} flex-col fixed top-0 w-full right-0 h-full items-center justify-center bg-[#CDCDCDBB] `}
            >

                
                <div className='flex flex-col shadow-2xl bg-[#ECBE9C] space-y-20 p-6 rounded-xl'>
                    <div className='flex flex-col space-y-6'>
                        <div className='flex flex-row justify-end items-end'>
                            <FaX onClick={() => setShowModal(false)} className='transition-transform ease-in duration-150 hover:cursor-pointer hover:scale-105'/>
                        </div>
                        <div className='flex flex-row justify-center'>
                            <h1 className='font-display font-light text-3xl'>Welcome Back!</h1>
                        </div>
                        <hr />
                        <form onSubmit={handleSignIn} className='flex flex-col items-end space-y-4 mx-auto'>
                            {
                                loginError && <p className='font-text font-light text-red-900'>{loginError}</p>
                            }
                            <p className='font-text flex space-x-2'>
                                <label htmlFor='username'>Email:</label>
                                <input 
                                    id='username'
                                    className='rounded-md focus:outline-none  focus:ring-[#7EBBFB99] focus:ring-4'
                                    type='text'
                                    name='email'
                                    required 
                                    autoFocus 
                                />
                            </p>
                            <p className='font-text flex space-x-2'>
                                <label htmlFor='password'>Password:</label>
                                <input 
                                    id='password'
                                    className='rounded-md focus:outline-none  focus:ring-[#7EBBFB99] focus:ring-4'
                                    type='password'
                                    name='password'
                                />
                            </p>
                            <button type='submit' className='font-text py-2 px-3 transition-transform ease-in duration-100 hover:scale-105'>Sign In</button>
                        </form>
                    </div>
                    
                    <div className='flex flex-row justify-center border-t py-6'>
                        <a href='/oauth-google'>
                            <Image src={googleLoginImage} alt='Sign in with Google'/>
                        </a>
                    </div>
                </div>
            </div>
        )
}