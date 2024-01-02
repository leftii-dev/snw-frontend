import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRightLong } from 'react-icons/fa6'
import CelebrateImage from '../public/images/celebrate.png'
import Dog_001 from '../public/images/dog_tilted_head.jpg'
import Dog_002 from '../public/images/golden_retriever.jpg'
import Dog_Tall from '../public/images/english_bulldog.jpg'
 

export default function Home() {
  console.log('Home Rendered')
  return (
    <main className='flex flex-row w-full bg-[#7EBBFB22]'>
      <div id='content-wrapper' className='flex flex-row flex-wrap flex-shrink w-10/12 mx-auto xl:flex-nowrap'>
           <div id='left-content-wrapper' className='flex flex-col xl:w-5/12'>
              <h1 className='font-display text-5xl leading-tight my-4'>Where Tail Wagging Meets Top-Notch Grooming</h1>
              <p className='font-text text-xl font-light leading-relaxed my-4'>
                Your full service and cage-free salon. With over 20 years experience, we handle all breeds, 
                all sizes, and all ages. Some extra filler text here, just to help with alignment. Want to make 
                sure there aren&apos;t any giant white space areas on the page.
              </p>
              <div id='cta-content-wrapper' className='mt-10'>
                <div id='cta-content' className='flex flex-row items-center space-x-36'>
                  <Link href={'/appointments'}>
                    <div id='cta-book-appt' className='flex items-center justify-center px-5 py-3 rounded-lg bg-[#7EBBFB99] hover:bg-[#7EBBFBC7]'>
                      <span className='font-text text-lg font-bold'>Book an appointment</span>
                    </div>
                  </Link>
                  <Link href={'/gallery'}>
                    <div id='cta-past-work' className=' group flex items-center'>
                      <span className='font-text font-light text-lg transition-all ease-in duration-200 mr-2 group-hover:underline group-hover:mr-4'>See Our Past Work</span>
                      <FaArrowRightLong />
                    </div>
                  </Link>
                </div>
                <div id='banner-content' className='hidden xl:flex flex-row border border-black rounded-lg py-8 px-6 mt-20 w-full'>
                  <div className='flex flex-col w-1/3 mx-3'>
                    <Image src={CelebrateImage}
                      className='object-cover aspect-auto'
                      alt='Party Trumpet'
                    />
                  </div>
                <p className='font-text font-light'>We’re excited to celebrate our first great year of <span className='font-bold'>Shag n Wag</span> grooming with you! We couldn’t have done it without you and can’t wait for the future!</p>
                </div>
              </div>
           </div>
           <div className='w-1/12'></div>
           <div id='gallery-wrapper' className='flex-wrap flex flex-row  xl:ml-10 my-6 gap-6 xl:flex-nowrap xl:flex-grow'>
              <div id='gallery-left' className='flex'>
                <Image className='object-cover object-top aspect-auto rounded-xl'
                  src={Dog_Tall}
                  alt='Freshly Groomed Poodle'
                  />
              </div>

            <div id='gallery-right' className='flex flex-col gap-6'>
              <div id='gallery-top-right' className='flex'>
                <Image className='object-cover object-right-top aspect-square rounded-xl'
                  src={Dog_001}
                  alt='Freshly Groomed Poodle'
                />
              </div>
              <div id='gallery-bottom-right' className='flex'>
                <Image className='object-cover object-top aspect-square rounded-xl'
                  src={Dog_002}
                  alt='Happy English Bulldog'
                />
              </div>
            </div>
            <div className='flex-grow'></div>
          </div>
        </div>
    </main>
  )
}
