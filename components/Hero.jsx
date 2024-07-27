import Image from 'next/image';
import React from 'react'

const Hero = () => {
  return (
    <section className="my-14  flex flex-col sm:flex-row gap-8 justify-center p-10 h-ful " id="Introduction">
      <div className='max-w-3xl '>

        <h2 className="hero__title">⚡️Chaitanya Yadav⚡️</h2>
        <h3 className='hero__role'>full-Stack Developer</h3>
        <h4 className="hero__subtitle max-w-3xl">
        A highly motivated full-stack developer with a passion for building innovative solutions. I'm Chaitanya Yadav, a B.Tech student with a strong foundation in Python, Javascript, Rust, and C/C++. This portfolio showcases my diverse skillset and highlights projects that demonstrate my ability to tackle complex challenges across the entire development stack.
        </h4>
        <div className='flex gap-5 my-6'>
          <button className='custom-btn'>
            My Work
          </button>
          <button className='custom-btn'>Contact me</button>
        </div>
      </div>
      <div className='overflow-hidden'>
        <Image src="/my_pic.jpeg" alt='Chaitanya Yadav' width={360} height={360} className='object-contain rounded-full shadow-lg' />

      </div>
    </section>
  );
}

export default Hero
