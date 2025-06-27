'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

const contacts = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/chaitanya-yadav-55826b263/',
    icon: <FaLinkedin className="text-blue-500" />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Chaitanya-exe',
    icon: <FaGithub className="text-white" />,
  },
  {
    name: 'Email',
    url: 'mailto:jeetkrishna3333@gmail.com',
    icon: <FaEnvelope className="text-red-400" />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/chaitanya.exe/',
    icon: <FaInstagram className="text-pink-400" />,
  },
];

export default function ContactSection() {
  return (
    <section className="relative px-6 md:px-16 py-24 bg-[#101010] text-white font-geist text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-gray-400 mb-10"
      >
        Feel free to connect with me on any platform — I’m always open to collaboration and conversation.
      </motion.p>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 text-sm text-gray-300 hover:text-white transition"
          >
            <div className="text-3xl">{contact.icon}</div>
            {contact.name}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
