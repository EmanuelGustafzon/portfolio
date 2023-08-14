'use client'
import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='bg-slate-900 '>
      <div className='container h-12 mx-auto px-4'>
        <Link className='text-lime-600 text-xl font-bold text-3xl' href={'/'}>Emanuels Portfolio</Link>
      </div>
    </div>
  )
}

export default NavBar


