'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="relative px-6 md:px-16 py-24 bg-[#121212] text-white font-geist">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-gray-300 leading-relaxed"
        >
          I'm a passionate developer who thrives on solving real-world problems through software. I specialize in building intelligent, AI-enhanced applications, but my toolkit extends across full-stack web development, backend systems, and DevOps workflows. I'm deeply curious, constantly exploring new technologies, and quick to adapt — whether it's working with large language models, deploying backend systems, or crafting beautiful user experiences.
        </motion.p>
      </div>

      {/* Subtle Background Effect */}
      <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-pink-500 opacity-10 blur-[100px] rounded-full z-0" />
    </section>
  );
}
