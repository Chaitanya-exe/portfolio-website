import React from 'react'
import Head from './Head'
import Icons from './Icons';

const Contact = () => {
  return (
    <Head
      title="Contact Me"
      desc="Get in touch to discuss opportunities or just say hello."
    >
      <section className=' max-w-xl mx-auto my-12' id='Contact'>
        <Icons />
      </section>
    </Head>
  );
}

export default Contact
