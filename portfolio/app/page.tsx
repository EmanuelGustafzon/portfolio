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
      <Header text='Welcome!'/>
      <div className='flex justify-center m-3 w-76 lg:ml-32 lg:mr-32 mt-8 mb-8'>
        <p className='text-slate-900'>
          I have a challange for you! decode this binary sequence:  01000011 01101000 01100001 01101110 01100111 01100101 00100000 01110100 01101000 01100101 00100000 01110111 01100001 01111001 00100000 01111001 01101111 01110101 00100000 01110011 01100101 01100101 00100000 01110100 01101000 01101001 01101110 01100111 01110011 00101100 00100000 01100001 01101110 01100100 00100000 01110100 01101000 01100101 00100000 01110100 01101000 01101001 01101110 01100111 01110011 00100000 01111001 01101111 01110101 00100000 01110011 01100101 01100101 00100000 01110111 01101001 01101100 01101100 00100000 01100011 01101000 01100001 01101110 01100111 01100101
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
