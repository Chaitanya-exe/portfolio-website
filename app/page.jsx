import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Sidebar from "@/components/Sidebar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
   <main className="flex gap-4">
    <Sidebar />
    <div className="overscroll-y-auto flex-1 *:p-10 ">
    <Hero />
    <ProjectCard />
    <Skills />
   <Contact />

    </div>
   </main>
  );
}
