import NavBar from '../components/NavBar'
import Card from '../components/Card'
import { projects } from '../portfolio-projects/projects'
import Header from '../components/Header'

export default function Home() {

  projects?.map(project => {
    console.log(project.title)
  })

  return (
    <div>
      <NavBar/>
      <Header text='My Projects'/>
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
