import Image from "next/image"
const Banner = () => {
  return (
        <div className="hero py-12 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image width="600" height="700" src="/images/switzerland.jpg" className="rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold sm:text-lg">&quot;Hello World!&quot;</h1>
                <p className="py-6">My name is Emanuel and I am a passionate coder who love to write logic and deepen my knowledge and learn new things. I love the feeling of opening 
                a new blank page in VS Code and start working on a new feature that requires me to research and problem solve.</p>
                <p className="py-6">When I am not coding I love adventure, be out in nature, explore new places or share a good meal or coffee with love ones.</p>
                </div>
            </div>
        </div>
  )
}

export default Banner


