import '../../App.css'
import { my_informations } from '../constants/links'

const AboutMe = () => {
  return (
    <section className="flex gap-16 max-sm:gap-12 justify-between items-center p-16 max-sm:p-8 max-sm:items-stretch  flex-wrap">
      {my_informations.map((information, index) => (
        <div className='' key={index}>
          <h3 className='text-gradient uppercase font-bold text-lg max-sm:text-sm'> {information.title} </h3>
          <p className='font-bold text-5xl max-sm:text-4xl'> {information.content} </p>
        </div>
      ))}
    </section>
  )
}

export default AboutMe