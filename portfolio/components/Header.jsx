'use client'
import React from 'react'

const Header = ({text}) => {
  return (
    <div className='flex flex-col items-center justify-center mt-3 mb-6'>
    <h2 className='text-amber-800 font-bold text-4xl tracking-wide mb-4'>
      {text}
    </h2>
    <div className='w-24 h-1 bg-lime-600'></div>
  </div>
  )
}

export default Header