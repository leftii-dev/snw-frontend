import Image from 'next/image'
import logoImage from '../public/images/logo.jpg' 

export default function Home() {
  return (
    
      <div className='flex flex-row justify-between'>
        <div id='logo-div' className=''>
          <Image
            className='w-44' 
            src={logoImage}
            alt='Shag n Wag Logo'
          />
        </div>
        <div  id='links' className='self-center'>

        </div>
      </div>
  )
}
