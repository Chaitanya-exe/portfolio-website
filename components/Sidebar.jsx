import { tabs } from "@/constants";
import React from "react";

const Sidebar = () => {
  return (
    <section className="sidebar">
      {tabs.map((tab) => (
        <a href={`#${tab.title}`}>
          <p key={tab.id} className="capitalize hover:font-bold">
            <span>{tab.title}</span>
          </p>
        </a>
      ))}
    </section>
  );
};

export default Sidebar;
