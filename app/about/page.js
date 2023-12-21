'use client'
import Image from 'next/image'
import ChristinaPoodle from '../../public/images/poodle_profile.jpg'

export default function AboutPage() {
    console.log('About Rendered')
    return (
        <main className='h-full w-full bg-[#7EBBFB22]'>
            <div id='content-wrapper' className='flex w-10/12 mx-auto my-6'>
            
                <div id='about-blurb' className='flex-1'>
                    <div className='float-right ml-8 w-5/12'>
                        <Image className='object-fill object-top aspect-auto rounded-xl w-full float-right mt-4' src={ChristinaPoodle} alt='Christina Wagner - Owner/Professional Groomer with a freshly groomed poodle' />
                    </div>
                    <p className='font-display text-4xl leading-relaxed w-full mb-4'>Meet Christina: A Dog Whisperer With Scissors</p>
                    <p className='flex-1 mb-3 leading-relaxed font-text text-lg'>Christina&apos;s journey began in the vibrant world of dog shows, handling multiple breeds with a keen eye for detail and a gentle touch. This experience not only honed her skills in grooming and styling, but also instilled in her a profound understanding of canine behavior and needs.</p>
                    <p className='flex-1 mb-3 leading-relaxed font-text text-lg'>From the playful Poodle to the majestic Great Dane, Christina has cut hair on practically every dog breed imaginable. She approaches each animal with respect and patience, building trust and ensuring their comfort throughout the grooming process.</p>
                    <p className='flex-1 mb-3 leading-relaxed font-text text-lg'>Beyond the technical expertise, it&apos;s Christina&apos;s genuine affection for dogs that truly sets her apart. She believes in treating each animal as an individual, tailoring their grooming experience to their unique personality and needs. Whether it&apos;s a playful puppy getting their first trim or a senior dog needing special care, Christina provides a loving and stress-free environment that makes them feel pampered and adored.</p>
                    <p className='flex-1 mb-3 leading-relaxed font-text text-lg'>Christina&apos;s passion for dogs extends beyond the grooming salon. She&apos;s an active advocate for animal welfare and regularly volunteers at local shelters and rescue organizations. Her dedication to the well-being of all dogs shines through in everything she does.</p>
                    <p className='flex-1 mb-3 leading-relaxed font-text text-lg'>When you entrust your furry family member to Christina&apos;s care, you&apos;re not just choosing a skilled groomer, you&apos;re choosing someone who shares your love for dogs and understands their unique needs. You&apos;re choosing a friend who will treat your dog with the same compassion and respect that you do.</p>
                    <p className='flex-1 mb-3 leading-relaxed font-text text-lg'>So, if you&apos;re looking for a dog groomer who goes the extra mile, someone who will not only make your dog look beautiful but also feel loved and cared for, then look no further than Christina Wagner.</p>
                    
                </div>
                
            </div>
            
        </main>
    )
}