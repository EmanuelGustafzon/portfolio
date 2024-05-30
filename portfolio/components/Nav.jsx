import Link from 'next/link'
import { FaLinkedin, FaGithub, FaEnvelope, FaFile } from 'react-icons/fa';

const Nav = () => {
  return (
    <div className='w-full h-auto fixed z-10 bg-gray-100'>
      <div class="grid grid-cols-4 gap-4 content-start">
              <Link className="btn bg-gray-100 border-none" href='https://github.com/EmanuelGustafzon' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-2xl text-slate-900' />
              </Link>
              <Link  className="btn bg-gray-100 border-none" href='https://www.linkedin.com/in/emanuel-gustafzon-software-developer/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='text-2xl text-sky-700' />
              </Link>
              <a className="btn bg-gray-100 border-none" href='mailto:emanuel.gustafzon@gmail.com' target='_blank' rel='noopener noreferrer'>
                <FaEnvelope className='text-2xl text-red-600' />
              </a>
            <button className="btn bg-gray-100 border-none">
              <a href='resume.pdf' target='_blank' download rel='noopener noreferrer'>
                <FaFile className='text-2xl text-green-600' />
              </a>
              CV
            </button>
        </div>
      </div>
  )
}

export default Nav