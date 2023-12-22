'use client'
import {useState} from 'react'
import LoginModal from './LoginModal'
import { useRouter } from 'next/navigation'

export default function LoginButton({ loggedIn }) {
    const router = useRouter()
    const [showModal, setShowModal] = useState(false)
    const [loginError, setLoginError] = useState(null)

    console.log('LoginButton Rendered')

    const handleButtonClick = () => {
        if(!loggedIn){
            setShowModal(true)
        } else {
            handleSignOut()
        }
    }

    const handleSignOut = async () => {
        const res = await fetch('api/logout', {
            method: 'POST',
            credentials: 'include'
        })

        if(!res.ok){
            throw new Error('Unable to logout, are you signed in?')
        } else {
            router.push('/')
        }

    }
    
    const handleSignIn = async (event) => {
        event.preventDefault()
        setLoginError(null)
        const res = await fetch('/login', {
            method: 'POST',
            body: new URLSearchParams({
                'email': event.target.email.value,
                'password': event.target.password.value
            }),
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

        if(res.ok){
            setShowModal(false)
            router.push('/account')
            return res.json()
        }
        console.error(res.body)
        setLoginError('Login Failed. Check Email and Password and Try Again.')
    }

    return (
        <>
            <button onClick={handleButtonClick} type='button' className='font-text text-lg font-light'>
                {
                    loggedIn ?
                        'Sign Out'
                    :
                        'Sign In'
                }
            </button>
            <LoginModal handleSignIn={handleSignIn} setShowModal={setShowModal} showModal={showModal} loginError={loginError}/>
        </>
    )
}