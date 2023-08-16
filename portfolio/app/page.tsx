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
      <div className='flex justify-center mt-3 mb-3 w-76 lg:ml-32 lg:mr-32 mt-8 mb-8 bg-color-red'>
        <p>
          Hello! I'm a junior developer experienced in HTML, CSS, Bootstrap, Tailwind, JavaScript, TypeScript, Python, Node.js, PostgreSQL and MongoDB. JavaScript and Node.js are where my heart truly lies.
          I am dedicated, flexible, and passionate about coding. I thrive on new challenges and am always eager to learn. Friendly by nature, I am excited to contribute my skills to exciting projects.
          Looking forward to making an impact through code!
        </p>      
      </div>
      <Header text='My Projects'/>
      <div className='grid grid-cols-auto gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' >
      {projects?.map( project => {
       return (
          <Card key={project.id} image={project.image} deployed={project.deployed} title={project.title} content={project.content}/>
       )
      })}
       </div>
       <Footer/>
    </div>
  )
}
