'use client';

import { motion } from 'framer-motion';

const experience = [
  {
    role: 'Software Engineer Fellow',
    company: 'Headstarter',
    duration: 'Jul 2024 – Sep 2024',
    description: `Learned and applied full-stack web development and integrated AI tools like ChatGPT and Gemini. Practiced professional networking and engagement.`,
  },
  {
    role: 'Lead Backend Developer',
    company: 'bdbvpl',
    duration: 'Dec 2024 – Jan 2025',
    description: `Led the backend development team, built professional dashboards, managed database architecture and development workflows using Next.js.`,
  },
  {
    role: 'Backend Developer Intern',
    company: 'PearlThoughts',
    duration: 'July 2025 - August 2025',
    description: `Worked with senior developer on a scalable elastic scheduling API from a static scheduling API resulting in 50% efficiency increase in the booking speed and appointment handling in edge cases`
  }
];

export default function ExperienceSection() {
  return (
    <section className="relative px-6 md:px-16 py-24 bg-[#111111] text-white font-geist">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          My Journey So Far
        </motion.h2>

        <div className="relative border-l border-white/20 ml-4 md:ml-6">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 pl-6 relative"
            >
              <div className="absolute left-[-9px] top-1 w-4 h-4 bg-pink-500 rounded-full shadow-md" />
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-sm text-gray-400 mb-1">{exp.company} • {exp.duration}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}

          {/* Open Journey Dot */}
          <div className="pl-6 mt-12 relative">
            <div className="absolute left-[-9px] top-1 w-4 h-4 border-2 border-pink-500 rounded-full animate-ping" />
            <p className="text-gray-500 italic text-sm">The journey continues...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
