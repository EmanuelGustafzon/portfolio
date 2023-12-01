import Link from "next/link"

const Card = ({title, image, content, deployed, sourceCode, sourceCodeApi}) => {
  return (
    <div className='h-auto bg-slate-900 rounded-xl overflow-hidden m-1' >
      {image && <img src={image} alt={title} className='w-full object-cover'/>}
      <h2 className='text-stone-300 font-bold p-2'>{title}</h2>
      <p className='text-stone-400 p-2'>{content}</p>
      <div className='flex flex-col'>
      <Link className='text-lime-600 underline hover:text-lime-400 p-2 ' href={deployed} rel='noopener noreferrer' target='_blank'>View Work Here!</Link>
      <Link className='text-lime-600 underline hover:text-lime-400 p-2 ' href={sourceCode} rel='noopener noreferrer' target='_blank'>See Code Base!</Link>
      {sourceCodeApi && <Link className='text-lime-600 underline hover:text-lime-400 p-2 ' href={sourceCode} rel='noopener noreferrer' target='_blank'>See API Code Base!</Link>}
      </div>
    </div>
  )
}

export default Card