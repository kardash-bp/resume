'use client'
import { useState } from 'react'
import { skills } from '@/data/page-data'
import { SkillType } from '../types'
const Skills = () => {
  const { soft, hard } = skills
  const [activeTab, setActiveTab] = useState('soft')
  const setBg = (active: string) =>
    activeTab === active ? 'bg-yellow' : 'bg-grey'
  const setTextAlignment = (tab: string) =>
    'soft' === tab ? 'text-left' : 'text-right'
  const skillsList = (data: SkillType[]) =>
    data.map(({ icon, text }, i) => (
      <li key={i} className='skill'>
        <span>{icon}</span>
        {text}
      </li>
    ))
  return (
    <section className='mb-10'>
      <div className='flex font-roboto'>
        {['soft', 'hard'].map((el) => (
          <button
            key={el}
            type='button'
            className={`btn ${setBg(el)} ${setTextAlignment(el)}`}
            onClick={() => setActiveTab(el)}
          >
            {el} Skills
          </button>
        ))}
      </div>
      <ul className='flex flex-row flex-wrap content-start list-none'>
        {activeTab === 'soft' ? skillsList(soft) : skillsList(hard)}
      </ul>
    </section>
  )
}

export default Skills
