'use client'
import { useState } from 'react'

export default function Register() {
    const [email, setEmail] = useState('')
    const [secret, setSecret] = useState('')
    const [confirmSecret, setConfirmSecret] = useState('')
    const [name, setName] = useState('')

    const handleRegistration = () => {

    }

    return (
        <main className='w-full bg-[#7EBBFB22]'>
            <div className='flex flex-col w-10/12 mx-auto'>
            <h1 className='font-display text-3xl'>New User Registration</h1>
                <form className='flex flex-col w-fit' onSubmit={handleRegistration}>
                    <div className='flex flex-row w-fit space-x-2'>
                        <div id='label-div' className='flex flex-col items-end w-fit space-y-6'>
                            <p>
                                <label htmlFor='name' className='font-text'>Name:</label>
                            </p>
                            <p>
                                <label htmlFor='email' className='font-text'>Email:</label>
                            </p>
                            <p>
                                <label htmlFor='password' className='font-text'>Password:</label>
                            </p>
                            <p>
                                <label htmlFor='confirm-password' className='font-text'>Re-Enter Password:</label>
                            </p>
                        </div>
                        <div id='input-div' className='flex flex-col w-fit space-y-6'>
                            <p>
                                <input 
                                    id='name'
                                    type='text'
                                    name='name'
                                    className='rounded-md focus:outline-none  focus:ring-[#7EBBFB99] focus:ring-4'
                                    required
                                />
                            </p>
                            <p>
                                <input 
                                    id='email'
                                    type='email'
                                    name='email'
                                    className='rounded-md focus:outline-none  focus:ring-[#7EBBFB99] focus:ring-4'
                                    autoFocus
                                    required 
                                />
                            </p>
                            <p>
                                <input 
                                    id='password'
                                    type='password'
                                    name='password'
                                    className='rounded-md focus:outline-none  focus:ring-[#7EBBFB99] focus:ring-4'
                                    required
                                />
                            </p>
                            <p>
                                <input 
                                    id='confirm-password'
                                    type='password'
                                    name='confirm-password'
                                    className='rounded-md focus:outline-none  focus:ring-[#7EBBFB99] focus:ring-4'
                                    required
                                />
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-end'>
                        <button type='submit' className='font-text py-2 px-3 transition-transform ease-in duration-100 hover:scale-105'>Register</button>
                    </div>
                </form>
            </div>
        </main>
    )
}