import React from "react";

const Head = ({ children, title, desc }) => {
  return (
    <div className="text-center">
      <h1 className="hero__title">{title}</h1>
      <h2 className="hero__subtitle mb-3">{desc}</h2>
      {children}
    </div>
  );
};

export default Head;
