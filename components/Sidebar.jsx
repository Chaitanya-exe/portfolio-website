import { tabs } from "@/constants";
import React from "react";

const Sidebar = () => {
  return (
    <section className="sidebar">
      {tabs.map((tab) => (
        <p key={tab.id} className="capitalize bg-gray-300 text-slate-800">
          <span>{tab.title}</span>
        </p>
      ))}
    </section>
  );
};

export default Sidebar;
