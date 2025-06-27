'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-20 bg-[#0e0e10] overflow-hidden font-geist">

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Hi, I'm <span className="text-pink-500">Chaitanya</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          I build full-stack apps, integrate AI systems, and design intelligent solutions. Curious by nature, fast to learn, and always shipping.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-white text-white hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Profile Picture */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-lg border border-white/10"
      >
        <Image
          src="/my_pic.png" // transparent background, black & white artwork
          alt="Chaitanya Yadav Illustration"
          width={400}
          height={400}
          priority
          className="object-contain w-full h-auto drop-shadow-lg"
        />
      </motion.div>

      {/* Decorative Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-600 opacity-20 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-600 opacity-10 rounded-full blur-[120px] z-0" />
    </section>
  );
}
