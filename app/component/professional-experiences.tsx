import { proExp } from '@/data/page-data'
const ProfessionalExperiences = () => {
  return (
    <section>
      <h2 className='mb-6'>Professional Experiences</h2>
      <div>
        {proExp.map((el, i) => (
          <div
            key={i}
            className={`flex flex-col mb-4 p-4 rounded-md drop-shadow-md ${
              el.current ? 'bg-green-light' : 'bg-yellow-light'
            }`}
          >
            <h3 className='mb-2'>{el.role}</h3>
            <p>{el.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProfessionalExperiences
