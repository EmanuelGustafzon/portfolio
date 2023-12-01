import NavBar from '../components/NavBar'
import Card from '../components/Card'
import { projects } from '../portfolio-projects/projects'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Home() {

  projects?.map(project => {
    console.log(project.title)
  })

  return (
    <div>
      <NavBar/>
      <Header text='About Me'/>
      <div className='flex justify-center mt-3 mb-3 w-76 lg:ml-32 lg:mr-32 mt-8 mb-8'>
        <p className='text-slate-900'>
          Welcome to my portfolio! I am a passionate programmer and always striving to learn new things. 
          I am most confident with JavaScript and Typescript, Node.js and express and MongoDB but I also have
          knowledge about SQL and Python and currently learning C#. I love to explore different technologies and 
          take on diverse coding challenges.
        </p>      
      </div>
      <Header text='My Projects'/>
      <div className='grid grid-cols-auto gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' >
      {projects?.map( project => {
       return (
          <Card 
          key={project.id} 
          image={project.image} 
          title={project.title} 
          content={project.content}
          deployed={project.deployed}
          sourceCode={project.sourceCode}
          sourceCodeApi={project.sourceCodeApi}
          />
       )
      })}
       </div>
       <Footer/>
    </div>
  )
}
