'use client'
import { FaX } from 'react-icons/fa6'
export default function LoginModal({ handleSignIn, setShowModal, showModal }) {
    console.log('LoginModal Rendered')
        return(
            <div 
                id='modal-div'
                className={`${showModal ? 'flex' : 'hidden'} flex-col fixed top-0 w-full lg:right-0 lg:w-1/3 h-1/2 items-center bg-slate-300`}
            >

                <div className='flex flex-row justify-end w-10/12 items-end m-6'>
                    <FaX onClick={() => setShowModal(false)} className='hover:cursor-pointer'/>
                </div>
                <div className='flex flex-row flex-grow'>
                    <form onSubmit={handleSignIn} className='flex flex-col items-end space-y-4 mx-auto'>
                        <p>
                            <label htmlFor='username'>Email:</label>
                            <input 
                                id='username'
                                type='text'
                                name='email'
                                placeholder='Email' 
                                required 
                                autoFocus 
                            />
                        </p>
                        <p>
                            <label htmlFor='password'>Password:</label>
                            <input 
                                id='password'
                                type='password'
                                name='password'
                                placeholder='Password'
                            />
                        </p>
                        <button type='submit'>Sign In</button>
                    </form>
                    <div>
                        {/* LOGIN WITH GOOGLE BUTTON */}
                    </div>
                </div>
            </div>
        )
}