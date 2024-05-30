import Link from "next/link"

const Card = ({title, content, website, sourceCode}) => {
  return (
    <div className="card w-96 bg-sky-100">
      <div className="card-body items-center text-center">
        <h3 className="card-title">{title}</h3>
        <p>{content}</p>
        <div className="card-actions justify-end">
          {website && <Link href={website} target='_blank' className="btn text-black bg-sky-200">Website</Link> }
          <Link href={sourceCode} target='_blank' className="btn text-black bg-sky-200">Source Code</Link>
        </div>
      </div>
    </div>
  )
}

export default Card