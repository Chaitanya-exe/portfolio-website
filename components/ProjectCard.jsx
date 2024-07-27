import React from "react";
import Head from "./Head";
import { Projects } from "@/constants";
import Image from "next/image";

const Card = ({ project, key }) => {
  return (
    <section className="group bg-slate-200 rounded-xl shadow-lg p-3 hover:translate-x-1 hover:scale-110 transition ease-in-out delay-150" id={key}>
      <h2 className="hero__role">Project {project.id}</h2>
      <Image
        src={project.img}
        width={400}
        height={500}
        alt="img"
        className="object-contain ml-5 my-3 rounded-xl"
      />
      <div className="p-3 *:py-3">
        <p className="hero__subtitle">{project.title} </p>
        <p className="text-left">{project.desc}</p>
      </div>

      <button className="custom-btn">
        <a href={`${project.link}`} className="text-primary" prefetch={false}>
          View Project
        </a>
      </button>
    </section>
  );
};

const ProjectCard = () => {
  return (
    <Head
      title="My Projects"
      desc="Check out the awesome projects I've made.🤘"
    >
      <section className="grid gap-10 my-12 md:grid-cols-2 lg:grid-cols-3 " id="projects">
        {Projects.map((project) => (
          <Card project={project} key={project.id} />
        ))}
      </section>
    </Head>
  );
};

export default ProjectCard;
