'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  if (typeof window === 'undefined') return;

  const onScroll = () => setScrolled(window.scrollY > 20);
  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <header className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-[#0e0e10]/70 backdrop-blur border-b border-white/10 shadow' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center font-geist">
        <Link href="/">
          <span className="text-xl font-semibold text-white">Chaitanya.dev</span>
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm text-white">
          <li><a href="#about" className="hover:text-pink-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-pink-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-pink-400 transition">Projects</a></li>
          <li><a href="#experience" className="hover:text-pink-400 transition">Experience</a></li>
          <li><a href="#contact" className="hover:text-pink-400 transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
