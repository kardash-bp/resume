import Image from 'next/image'
import React from 'react'
import { PersonalDataType } from '../types'
import { Envelope, Twitter, Linkedin, Medium } from './icons'
import { personalData } from '@/data/page-data'
import Link from 'next/link'
const Sidebar = () => {
  const { name, role, education, contactLinks } = personalData
  return (
    <div className='w-full min-w-[300px] bg-black flex flex-col h-auto md:h-screen justify-between md:w-1/3 md:justify-around'>
      <div className=' text-white flex flex-col p-10 md:p-6'>
        <div className='flex justify-center items-center'>
          <img
            src='/images/no-img.jpg'
            alt='profile'
            className=' rounded-full w-[250px] h-[250px]  md:max-h-[250px] mb-6'
          />
        </div>
        <h1 className='mb-2'>{name}</h1>
        <h2 className='mb-6'>{role}</h2>
        <p className='mb-2'>{education[0]}</p>
        <p className='mb-2'>{education[1]}</p>
        <div className='my-4'>
          <h3>CONTACT ME</h3>
          <div className='flex flex-row justify-center gap-2 mt-2'>
            <Link
              href={contactLinks[0]}
              aria-label='email link'
              className='icons-contact'
            >
              <Envelope className='' />
            </Link>
            <Link
              href={contactLinks[1]}
              aria-label='twitter'
              className='icons-contact'
            >
              <Twitter className='' />
            </Link>
            <Link
              href={contactLinks[2]}
              aria-label='linkedin'
              className='icons-contact'
            >
              <Linkedin className='' />
            </Link>
            <Link
              href={contactLinks[3]}
              aria-label='medium'
              className='icons-contact'
            >
              <Medium className='' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
