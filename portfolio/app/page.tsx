import Nav from '../components/Nav'
import Banner from '../components/Banner'
import { projects } from '../portfolio-projects/projects'
import Footer from '../components/Footer'
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
        <h3 className='text-4xl font-bold py-6'>Studies at Code Institute</h3>
      </div>
      <div className='container flex justify-center'>
        <p className=''>While I was studing at Code Institute I built 5 coding projects</p>
      </div>
      <Experience/>
       <Footer/>
    </div>
  )
}
