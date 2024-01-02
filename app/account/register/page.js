'use client'
import { validateEmail, validateSecret } from '@/app/utils/validation'
import { trimAround } from '@/app/utils/trim'
import { useEffect, useState } from 'react'

export default function Register() {
    const [name, setName] = useState({value: null, isValid: false})
    const [email, setEmail] = useState({value: null, isValid: false})
    const [secret, setSecret] = useState({value: null, isValid: false})
    const [confirmSecret, setConfirmSecret] = useState({value: null, isValid: false})
    const [validationError, setValidationError] = useState([])

    useEffect(() => {
        console.log(secret)
        console.log(confirmSecret)
    }, [secret, confirmSecret])

    const handleRegistration = async (e) => {
        e.preventDefault()

        const registerURL = '/api/users/'
        const formData = {
            email: email.value,
            secret: secret.value,
            name: name.value
        }
        const jsonData = JSON.stringify(formData)

        console.log(jsonData)

        const res = await fetch(registerURL, {
            method: 'POST',
            body: jsonData,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(!res.ok){
            throw new Error('Registration Failed')
        }

        const result = res.json()
        console.log(result)
        return result
    }

    return (
        <main className='flex flex-1 w-full bg-[#7EBBFB22]'>
            <div className='flex flex-col w-10/12 p-6 mx-auto'>
            <h1 className='font-display text-3xl text-center w-full mb-2 mx-auto'>Create Your Account</h1>
                <form className='flex flex-col mx-auto rounded-lg p-3' onSubmit={(e) => handleRegistration(e)}>
                        <div id='inputs-div' className='flex flex-col w-80 space-y-6'>
                            <div>
                                <div>
                                    <label htmlFor='name' className='font-text'>Name:</label>
                                </div>
                                <div>
                                    <input 
                                        id='name'
                                        type='text'
                                        name='name'
                                        className='shadow-sm p-1 rounded-md w-full border-blue-300 border-offset-2 focus:outline-none  focus:ring-[#7EBBFB99] focus:ring-4'
                                        onChange={(e) => setName({value: trimAround(e.target.value), isValid: trimAround(e.target.value).length > 0})}
                                        autoFocus
                                        required
                                    />
                                    <div className={`${name.value !== null && !name.isValid ? 'block' : 'hidden'} font-text font-light text-sm text-red-600`}>
                                        Name cannot be blank
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <div>
                                    <label htmlFor='email' className='font-text'>Email:</label>
                                </div>
                                <div>
                                    <input 
                                        id='email'
                                        type='email'
                                        name='email'
                                        className='rounded-md p-1 w-full focus:outline-none  focus:ring-[#7EBBFB99] focus:ring-4'
                                        onChange={(e) => setEmail({value: e.target.value.trim(), isValid: validateEmail(e.target.value.trim())})}
                                        required 
                                    />
                                    <div className={`${email.value !== null && !email.isValid ? 'block' : 'hidden'} font-text font-light text-sm text-red-600`}>
                                        Valid email required (e.g. user@domain.com)
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label htmlFor='password' className='font-text'>Password:</label>
                                </div>
                                <div>
                                    <input 
                                        id='password'
                                        type='password'
                                        name='password'
                                        className='rounded-md p-1 w-full focus:outline-none  focus:ring-[#7EBBFB99] focus:ring-4'
                                        onChange={(e) => setSecret({value: e.target.value, isValid: validateSecret(e.target.value)})}
                                        required
                                    />
                                    <div className={`${secret.value !== null && !secret.isValid ? 'block' : 'hidden'} w-max font-text font-light text-sm text-red-600`}>
                                        <p>Password Must be 8-128 Characters and Contain:</p>
                                        <p>-1 Uppercase Letter</p>
                                        <p>-1 Lowercase Letter</p>
                                        <p>-1 Number</p>
                                        <p>-1 Special Character (!@#$%^&*()_+\-=)</p>
                                    </div>
                                </div>
                            </div>

                            <div>  
                                <p>
                                    <label htmlFor='confirm-password' className='font-text'>Re-Enter Password:</label>
                                </p>
                                <p>
                                    <input 
                                        id='confirm-password'
                                        type='password'
                                        name='confirm-password'
                                        className='rounded-md p-1 w-full focus:outline-none  focus:ring-[#7EBBFB99] focus:ring-4'
                                        onChange={(e) => setConfirmSecret({value: e.target.value, isValid: e.target.value === secret.value})}
                                        required
                                    />
                                    {
                                        confirmSecret.value !== null && !confirmSecret.isValid && 
                                        <p className='font-text font-light text-sm text-red-600 italic'>Passwords do not match</p>
                                    }
                                </p>
                            </div>
                        </div>
                    <div className='flex flex-row py-2 justify-end'>
                        <button type='submit' className='font-text py-2 px-3 transition-transform ease-in duration-100 hover:scale-105'>Register</button>
                    </div>
                </form>
            </div>
        </main>
    )
}