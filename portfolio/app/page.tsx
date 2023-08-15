import NavBar from '../components/NavBar'
import Card from '../components/Card'
import { projects } from '../portfolio-projects/projects'
import { title } from 'process'

export default function Home() {

  projects?.map(project => {
    console.log(project.title)
  })

  return (
    <div>
      <NavBar/>
      <h2 className='text-lime-600 font-bold text-4xl tracking-wide'>My Projects</h2>
      <div className='grid grid-cols-auto gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' >
      {projects?.map( project => {
       return (
          <Card key={project.id} image={project.image} deployed={project.deployed} title={project.title} content={project.content}/>
       )
      })}
       </div>
    </div>
  )
}
