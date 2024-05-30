import Link from "next/link"

const Card = ({title, content, website, sourceCode}) => {
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h3 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions justify-end">
          <Link href={website} className="btn text-gray-100">Website</Link>
          <Link href={sourceCode} className="btn text-gray-100">Source Code</Link>
        </div>
  </div>
</div>
  )
}

export default Card