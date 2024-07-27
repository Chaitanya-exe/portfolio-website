"use client";

import React, { useState } from "react";
import Head from "./Head";
import { current } from "@/constants";

const Show = ({ currentdiv }) => {
  return (
    <main className="p-3 text-start">
      {currentdiv.list.map((item) => (
        <>
          <span className="hero__subtitle">{item.heading}</span>
          <ul className="list-inside *:py-2 list-disc text-md tracking-wide">
            <li>{item.content}</li>
          </ul>
        </>
      ))}
    </main>
  );
};

const Skills = () => {
  const [currentdiv, setCurrentDiv] = useState(current[0]);
  return (
    <Head title="Skills & Experience">
    <section className="my-12" id="Skills & Experience">

      <div className="flex gap-8  justify-center *:bg-gray-100 *:p-3 *:rounded-lg ">
        <button
          onClick={() => setCurrentDiv(current[0])}
          className="hover:bg-black hover:text-white"
        >
          Experience
        </button>
        <button
          onClick={() => setCurrentDiv(current[1])}
          className="hover:bg-black hover:text-white"
        >
          Skills
        </button>
      </div>
      <div className="max-w-xl mx-auto">
        <Show currentdiv={currentdiv} />
      </div>
    </section>
    </Head>
  );
};

export default Skills;
