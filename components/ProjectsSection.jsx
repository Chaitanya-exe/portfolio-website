'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'AI RAG Agent',
    description:
      'An intelligent retrieval-augmented generation system using Ollama and LangChain to answer questions from PDFs and files.',
    link: 'https://github.com/Chaitanya-exe/RAG_model_langchain.git',
  },
  {
    title: 'Reddit Data Analyser',
    description:
      'An AI chatbot that integrates with Reddit via MCP server to read, analyze, and converse over Reddit threads.',
    link: 'https://github.com/Chaitanya-exe/mcp_reddit_tracker.git',
  },
  {
    title: 'Study Buddy',
    description:
      'An AI-powered academic assistant that teaches and solves exam questions based on your PDF notes.',
    link: 'https://github.com/Chaitanya-exe/study_buddy.git',
  },
  {
    title: 'Blockchain in Rust',
    description:
      'A raw implementation of blockchain in Rust to understand its underlying mechanisms from scratch.',
    link: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative px-6 md:px-16 py-24 bg-[#131313] text-white font-geist">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          What I've Built
        </motion.h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}
            >
              <div className="flex-1 bg-[#1c1c1c] p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm md:text-base mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-pink-400 hover:underline"
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>

              <div className="flex-1 min-h-[200px] w-full bg-[#222] rounded-xl border border-white/10 flex items-center justify-center text-gray-500 text-sm italic">
                Screenshot / Preview
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
