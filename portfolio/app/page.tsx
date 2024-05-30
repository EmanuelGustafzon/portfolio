import Nav from '../components/Nav'
import Banner from '../components/Banner'
import { projects } from '../portfolio-projects/projects'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Experience from '../components/Experience'
import Link from 'next/link'

export default function Home() {

  return (
    <div>
      <Nav/>
      <Banner/>
      <div className='container flex justify-center'>
        <h3 className='text-3xl font-bold px-6 py-6'>Real World Freelance Project</h3>
      </div>
      <div className="card w-96 bg-gray-50">
        <div className="card-body items-center text-center">
          <h3 className="card-title">Dynamic Website for an Event</h3>
          <p>We were two developers and a UX designer who built a website for a church event. The content is dynamic and can be managed from Google Sheets and when a customer book the event an email get sent to the customer and the information get stored in Google Sheets. I was mainly responsible for the connections on the backend and logic on the fronend and my coworker where responsable for the styling. </p>
            <div className="card-actions justify-end">
              <Link href='https://forankradkonferensen.se' className="btn text-black bg-gray-100">Website</Link>
              <Link href='/' className="btn text-black bg-gray-100">Source Code</Link>
            </div>
        </div>
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
