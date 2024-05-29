import Link from 'next/link'
import { FaLinkedin, FaGithub, FaEnvelope, FaFile } from 'react-icons/fa';

const Nav = () => {
  return (
    <div className='w-full h-auto fixed' >
    <div class="grid grid-cols-4 gap-4 content-start">
            <button className="btn">
            <Link href='https://github.com/EmanuelGustafzon' target='_blank' rel='noopener noreferrer'>
              <FaGithub className='text-2xl text-slate-900' />
            </Link>
          </button>
          <button className="btn">
            <Link href='https://www.linkedin.com/in/emanuel-gustafzon-software-developer/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='text-2xl text-sky-700' />
            </Link>
          </button>
          <button className="btn join-item">
            <Link href='' target='_blank' rel='noopener noreferrer'>
              <FaEnvelope className='text-2xl text-red-600' />
            </Link>
          </button>
          <button className="btn join-item">
            <Link href='' target='_blank' rel='noopener noreferrer'>
              <FaFile className='text-2xl text-green-600' />
            </Link>
            CV
          </button>
      </div>
      </div>
  )
}

export default Nav