import Link from "next/link"

const Experience = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10">
      <time className="font-mono italic">First Project</time>
      <div className="text-lg font-black">IPLAY Music Lessons</div>
      We started of learning HTML and CSS and developing responsive websites. 
      Have a look links below:
      <div>
      <button className="btn py-2 bg-gray-100"> <Link href="https://emanuelgustafzon.github.io/Milestone-project-1-music-lessons/">Deployed site</Link> </button>
      <button className="btn py-2 bg-gray-100"> <Link href="https://github.com/EmanuelGustafzon/Milestone-project-1-music-lessons">Source Code</Link></button>
      </div>
    </div>
    <hr/>
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">Secound Project</time>
      <div className="text-lg font-black">Learn Spanish Quiz</div>
      Secound we learned about how to write logic and JavaScript.
      <div>
        <button className="btn py-2 bg-gray-100"> <Link href="https://emanuelgustafzon.github.io/Milestone-project-2-Quiz/">Deployed site</Link> </button>
        <button className="btn py-2 bg-gray-100"> <Link href="https://github.com/EmanuelGustafzon/Milestone-project-2-Quiz">Source Code</Link></button>
      </div>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10">
    <time className="font-mono italic">Third Project</time>
      <div className="text-lg font-black">Escape The Building</div>
      We learned Python and I made a console game.
      <div>
      <button className="btn py-2 bg-gray-100 bg-gray-100"> <Link href="https://escape-the-building.herokuapp.com/">Deployed site</Link> </button>
      <button className="btn py-2 bg-gray-100 bg-gray-100" > <Link href="https://github.com/EmanuelGustafzon/escape-the-building">Source Code</Link></button>
      </div>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end mb-10">
    <time className="font-mono italic">Fourth Project</time>
      <div className="text-lg font-black">HikeIt Blog</div>
      We learned fullstack development, MVC, UX Design and Agile Methology and I built a blog about hiking using Django and SQL and JavaScript.
      <div>
        <button className="btn py-2 bg-gray-100"> <Link href="https://myhikeblog.herokuapp.com/">Deployed site</Link> </button>
        <button className="btn py-2 bg-gray-100"> <Link href="https://github.com/EmanuelGustafzon/Milestone-project-4-hiking-blog">Source Code</Link></button>
      </div>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10">
    <time className="font-mono italic">Fifth Project</time>
      <div className="text-lg font-black">Car Lover Media</div>
      I choosed to specilize in advanced frontend and got to learn Django Rest API and React.
      <div>
        <button className="btn py-2 bg-gray-100"> <Link href="https://autoloversmedia.herokuapp.com/">Deployed Website</Link> </button>
        <button className="btn py-2 bg-gray-100"> <Link href="https://github.com/EmanuelGustafzon/project-5-api-autolovers">Source Code Backend</Link> </button>
        <button className="btn py-2 bg-gray-100"> <Link href="https://github.com/EmanuelGustafzon/project-5-api-autolovers?tab=readme-ov-file">Source Code Frontend</Link></button>
      </div>
    </div>
  </li>
</ul>
  )
}

export default Experience