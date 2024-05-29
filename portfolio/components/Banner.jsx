
const Banner = () => {
  return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/images/switzerland.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">"Hello World!"</h1>
                <p className="py-6">My name is Emanuel and I am a passionate coder who love to write logic and deepen my knowledge and learn new things. I love the feeling of opening 
                a new blank page in VS Code and start working on a new feature that requires me to research and problem solve.</p>
                <p className="py-6">When I am not coding I love adventure, be out in nature, explore new places or share a good meal or coffee with love ones.</p>
                </div>
            </div>
        </div>
  )
}

export default Banner


