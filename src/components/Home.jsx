import React from 'react'

function Home() {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between h-screen mx-20">
        <div className="md:w-1/2 text-center md:text-left p-8">
          <h1 className="text-5xl font-bold mb-4"> Hi, I am   <span className='text-green-500'> Ashutosh Jha</span></h1>
          <h2 className="text-3xl font-semibold mb-4">Frontend Developer</h2>
          <p className="text-lg">
          4th year B.tech student learning web development. Well-versed in numerous programming languages including HTML5, JAVA OOPs, JavaScript, CSS, Typescript, C, and DSA.
          </p>
        </div>
        <div className="md:w-1/2 p-8">
          <img src="./src/assets/Home.png" alt="Profile" className="w-2/3 rounded-full shadow-2xl ml-10" />
        </div>
      </section>
    );
  }

export default Home
