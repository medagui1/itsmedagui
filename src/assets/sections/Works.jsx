import React from 'react'
import { projects } from '../constants/links'
import ProjectCard from '../components/ProjectCard'

const Works = () => {
  return (
    <section id='projects' className='p-8'>
      <h2 className='title text-4xl text-text_primary'>Selected Works.</h2>
      <ul>
        {projects.slice(0,3).map((project, index) => (
          <ProjectCard project={project} key={index}  index={index} />
        ))}
      </ul>
    </section>
  )
}

export default Works