'use client'
import {useState} from 'react'
import LoginModal from './LoginModal'

export default function LoginButton({ loggedIn }) {
    const [showModal, setShowModal] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
        }

        return res.body
    }
    
    const handleSignIn = async (event) => {
        event.preventDefault()
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

        if(!res.ok){
            console.error(res.body)

            throw new Error('Unable to login')
        }

        return res.json()
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
            <LoginModal handleSignIn={handleSignIn} setEmail={setEmail} setPassword={setPassword} setShowModal={setShowModal} showModal={showModal}/>
        </>
    )
}