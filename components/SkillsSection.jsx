'use client';

import { motion } from 'framer-motion';
import { FaPython, FaJs, FaNodeJs, FaReact, FaRust, FaGitAlt, FaLinux, FaAtom } from 'react-icons/fa';
import { SiNextdotjs, SiPostgresql, SiMysql, SiFastapi, SiTailwindcss, SiCplusplus, SiTypescript, SiNestjs } from 'react-icons/si';

const skills = [
  { label: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { label: 'TypeScript', icon: <SiTypescript className='text-blue-400' /> },
  { label: 'Python', icon: <FaPython className="text-blue-400" /> },
  { label: 'Rust', icon: <FaRust className="text-orange-400" /> },
  { label: 'C++', icon: <SiCplusplus className="text-indigo-400" /> },
  { label: 'FastAPI', icon: <SiFastapi className="text-green-400" /> },
  { label: 'React', icon: <FaReact className="text-cyan-400" /> },
  { label: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { label: 'Nest.js', icon: <SiNestjs className='text-pink-700' /> },
  { label: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { label: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
  { label: 'MySQL', icon: <SiMysql className="text-blue-300" /> },
  { label: 'LangChain', icon: <FaAtom className="text-purple-400" /> },
  { label: 'TailwindCSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { label: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
  { label: 'Linux', icon: <FaLinux className="text-gray-300" /> },
];

export default function SkillsSection() {
  return (
    <section className="relative px-6 md:px-16 py-24 bg-[#0f0f0f] text-white font-geist">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          My Tech Stack
        </motion.h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center bg-[#1b1b1b] hover:bg-[#262626] p-4 rounded-xl shadow-md transition duration-300"
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <p className="text-sm text-gray-300">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

