import Image from "next/image"
const Banner = () => {
  return (
        <div className="hero py-12 min-h-screen bg-sky-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image width="600" height="700" src="/images/switzerland.jpg" className="rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">Hi There 👋</h1>
                <p className="py-6">My name is Emanuel and I am a passionate coder who love to write logic and to dive deeper and solve complex problems. I love the feeling of opening 
                a new blank page in VS Code and start working on a new feature that requires me to research and problem solve.</p>
                <p>When I am not coding I love adventure, be out in nature, explore new places or share a good meal or coffee with love ones.</p>
                </div>
            </div>
        </div>
  )
}

export default Banner


