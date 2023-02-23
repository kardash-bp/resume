import React from 'react'
import { aboutMe } from '@/data/page-data'
const About = () => {
  const { title, body } = aboutMe
  return (
    <section>
      <h2 className='mb-6'>{title}</h2>
      {body?.map((el, i) => (
        <p key={i} className=''>
          {el}
        </p>
      ))}
    </section>
  )
}

export default About
