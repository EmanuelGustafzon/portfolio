import Nav from '../components/Nav'
import Banner from '../components/Banner'
import { projects } from '../portfolio-projects/projects'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Experience from '../components/Experience'


export default function Home() {

  projects?.map(project => {
    console.log(project.title)
  })

  return (
    <div>
      <Nav/>
      <Banner/>
      <div className='container flex justify-center'>
        <h3 className='text-3xl font-bold px-6 py-6'>Real World Freelance Project</h3>
       </div>

       <div className='container flex justify-center'>
        <h3 className='text-3xl font-bold px-6 py-6'>Hobby Projects</h3>
       </div>
       <div className='flex flex-wrap'>
       {projects.map(project => (
         <div className='pb-5' key={project.id}>
             <Card title={project.title} content={project.content} website={project.website} sourceCode={project.sourceCode}/>
         </div>
       ))};
       </div>
      
      <div className='container flex justify-center'>
        <h3 className='text-3xl font-bold px-6 py-6'>Projects from Code Institute</h3>
      </div>
      <div className='flex justify-center py-6 px-6'>
        <p className=''>Code Institute was a practical and theoretical chorse where we learned to code full stack web apps, work according to agile methology and UX design </p>
      </div>
      <Experience/>

       <Footer/>
    </div>
  )
}
