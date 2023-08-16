'use client'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-slate-900'>
      <div className='container mx-auto px-4 py-2 flex justify-between items-center'>
        <Link href='/' className='text-lime-600 text-xl font-bold text-3xl'>
          Emanuel's Portfolio
        </Link>
        <div className='flex space-x-4'>
          <a href='https://www.linkedin.com/in/emanuel-gustafzon-software-developer/' target='_blank' rel='noopener noreferrer'>
            <p className='text-2xl text-lime-600 hover:text-lime-400' >LinkedIn</p>
          </a>
          <a href='https://github.com/EmanuelGustafzon' target='_blank' rel='noopener noreferrer'>
            <p className='text-2xl text-lime-600 hover:text-lime-400' >Github</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



