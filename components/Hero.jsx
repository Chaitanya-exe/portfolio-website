import Image from 'next/image';
import React from 'react'

const Hero = () => {
  return (
    <section className="my-14 h-[60vh] flex gap-10 justify-center p-10 h-ful ">
    <div className='max-w-3xl '>

      <h2 className="hero__title">Chaitanya Yadav</h2>
      <h3 className='hero__role'>full-Stack Developer</h3>
      <h4 className="hero__subtitle max-w-3xl">
        I'm a passionate frontend developer with a keen eye for design and a
        love for creating intuitive user experiences. Let's bring your ideas to
        life!
      </h4>
      <div className='flex gap-5 my-6'>
        <button className='custom-btn'>
            My Work
        </button>
        <button className='custom-btn'>Contact me</button>
      </div>
    </div>
    <div className=''>
    <div className='overflow-hidden hero__imag '>
        <Image src="/image.png" alt='img' width={480} height={380}  className='object-contain'  />

    </div>
    </div>
    </section>
  );
}

export default Hero
