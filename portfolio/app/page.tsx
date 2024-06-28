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
        <div className='flex justify-center'>
          <h3 className='text-3xl font-bold px-6 py-6'>Real World Freelance Projects</h3>
        </div>
        <div className='flex justify-center'>
          <div className="card w-96 bg-white">
            <div className="card-body items-center text-center">
              <h3 className="card-title">Dynamic Website for an Event</h3>
              <p>We were two developers and a UX designer who built a website for a church event. The content is dynamic and can be managed from Google Sheets and when a customer book the event an email get sent to the customer and the information get stored in Google Sheets. I was mainly responsible for the connections on the backend and logic on the fronend and my coworker where responsable for the styling. </p>
                <div className="card-actions justify-end">
                  <Link href='https://forankradkonferensen.se' target='_blank' className="btn text-black bg-gray-100">Website</Link>
                  <Link href='https://github.com/forankradkonferensen/forankrad-konferensen' target='_blank' className="btn text-black bg-gray-100">Source Code</Link>
                </div>
            </div>
          </div>
        </div>
        <div className='bg-sky-100'>
          <div className='flex justify-center'>
            <h3 className='text-3xl font-bold px-6 py-6'>Hobby Projects</h3>
          </div>
          <div className='flex flex-wrap justify-center'>
          {projects.map(project => (
            <div key={project.id}>
                <Card title={project.title} content={project.content} website={project.website ? project.website : null} sourceCode={project.sourceCode}/>
            </div>
          ))}
          </div>
        </div>

       <div className='flex flex-wrap justify-center'>
        <h3 className='text-3xl font-bold px-6 py-6'>Blog Posts</h3>
      </div>
      <div className='flex justify-center'>
        <div className="card w-96 bg-white">
          <div className="card-body items-center text-center">
            <h3 className="card-title">Understanding Memory Management, Pointers, and Function Pointers in C </h3>
            <p>I wanted to learn more about low level programming and pointer so I wrote this post to learn it in a deeper way. </p>
              <div className="card-actions justify-end">
                <Link href='https://dev.to/emanuelgustafzon/understanding-memory-management-pointers-and-function-pointers-in-c-8ld' target='_blank' className="btn text-black bg-gray-100">Read here!</Link>
              </div>
          </div>
        </div>
        <div className="card w-96 bg-white">
          <div className="card-body items-center text-center">
            <h3 className="card-title">Dig Deeper into JavaScript</h3>
            <p>One of my favorite language is TypeScript, a superset of JavaScript and I wanted to dig deeper into the language so I wrote this post. If you have any feedback plese let me know. </p>
              <div className="card-actions justify-end">
                <Link href='https://dev.to/emanuelgustafzon/dig-deeper-into-javascript-2pi7' target='_blank' className="btn text-black bg-gray-100">Read here!</Link>
              </div>
          </div>
        </div>
      </div>
      <div className='bg-sky-100'>
        <div className='flex justify-center'>
          <h3 className='text-3xl font-bold px-6 py-6'>Algorhitms and DataStructures</h3>
        </div>
        <div className='py-6 px-6'>
          <p className='pb-6'>I enjoy solving difficut problems and puzzels with code when I have time. I have developed this skill mainly with Code Wars and Leetcode.</p>
          <p>Every december there is an advent calender by Advent of Code for programmers where you get one or two daily challanges during December, I did some of thos challanges so please have look and try to come up with your own solutions.</p>
        </div>
        <div className='flex justify-center pb-6'>
          <Link href='https://adventofcode.com/' target='_blank' className="btn text-black bg-sky-200">Code of Advent</Link>
          <Link href='https://github.com/EmanuelGustafzon/CodeOfAdvent' target='_blank' className="btn text-black bg-sky-200">My solutions</Link>
        </div>
      </div>
      
      <div className='flex justify-center'>
        <h3 className='text-3xl font-bold px-6 py-6'>Projects from Code Institute</h3>
      </div>
      <div className='flex justify-center py-6 px-6'>
        <p>Code Institute was a practical and theoretical chorse where we learned to code full stack web apps, work according to agile methology and UX design. </p>
      </div>
      <Experience/>

       <Footer/>
    </div>
  )
}
