'use client'
import React from 'react'

const Card = ({title, image, content, deployed}) => {
  return (
    
    <div className='h-auto bg-slate-900 rounded-xl overflow-hidden m-1'>
      {image && <img src={image} alt={title} className='w-full object-cover' />}
      <h2 className='text-lime-600 font-bold p-2'>{title}</h2>
      <p className='text-stone-300 p-2'>{content}</p>
      <a className='text-stone-400 hover:underline hover:text-lime-600 p-2' href={deployed} rel='noopener noreferrer' target='_blank'>View webiste</a>
    </div>
  )
}

export default Card