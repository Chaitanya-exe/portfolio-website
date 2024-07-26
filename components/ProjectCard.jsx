import React from "react";
import Head from "./Head";
import { Projects } from "@/constants";
import Image from "next/image";

const Card = ({ project }) => {
  return (
    <div className="group shadow">
      <h2 className="hero__role">Project {project.id}</h2>
      <Image
        src={project.img}
        width={400}
        height={500}
        alt="img"
        className="object-contain"
      />
      <div className="p-3 *:py-3">
        <p className="hero__subtitle">{project.title} </p>
        <p className="hidden group-hover:block text-left">{project.desc}</p>
      </div>

      <button className="custom-btn">
        <a href="#" className="text-primary" prefetch={false}>
          View Project
        </a>
      </button>
    </div>
  );
};

const ProjectCard = () => {
  return (
    <Head
      title="My Projects"
      desc="Check out some of the projects I've worked on."
    >
      <section className="grid gap-10 my-12 md:grid-cols-2 lg:grid-cols-3 ">
        {Projects.map((project) => (
          <Card project={project} />
        ))}
      </section>
    </Head>
  );
};

export default ProjectCard;
