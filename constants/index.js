import Image from "next/image";

export const tabs=[
    {id:1,title:"Introduction"},
    {id:2,title:"projects"},
    {id:3,title:"Skills & Experience"},
    {id:4,title:"Contact"},

]

export const Projects = [
  {
    id: 1,
    title: "An emerging web application to provide remote services.",
    desc: "This application is made using popular libraries like React and is connected to a backend service made using expressJS",
    img: "/sc1.png",
    link:"https://originaltertiary.com"
  },

  {
    id: 2,
    title: "Prompt Social Media, space to share powerful AI prompts",
    desc: "Made with a powerfull fullstack framework for javascript, NextJS.",
    img: "/sc2.png",
    link:"https://github.com/Chaitanya-exe/prompt_social_media.git"
  },
  {
    id: 3,
    title: "A multi Threaded HTTP server in Rust.",
    desc: "It's an HTTP server in Rust which can create multiple threads for incoming requests.",
    img: "/sc3.png",
    link:"https://github.com/Chaitanya-exe/rust_web_server.git"
  },
];

export const current = [
  {
    title: "Experience",
    list: [
      {
        heading: "Headstarter AI",
        content:
          "Currently ongoing fellowshipt at Headstarter AI where I am creating my personal brand and learnig industrial technical skills.",
      },
      {
        heading: "CodSoft",
        content:
          "A virtual intership where I made 2 fullstack projects and learn basic web development skills.",
      },
    ],
  },
  {
    title: "Skills",
    list: [
      {
        heading: "Technical",
        content:
          "My skill set included proficiency in- Python(web scraping), javascript(React, NextJS, NodeJS), C/C++, Rust, Linux Operating System, Computer Networks, Basic CyberSecurity.",
      },
      {
        heading: "Soft skills",
        content:
          "Effective Communication, Team Cooperation, Leadership.",
      },
     
    ],
  },
  {
    title: "About",
    list: [
      {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
      },
      
    ],
  },
];

export const icons = [
    {
      url:"https://www.linkedin.com/in/chaitanya--yadav/",
      img:"/linkedin.svg"
    },
    {
      url:"https://www.instagram.com/chaitanya.exe_?igsh=MWhyMzFqenpwd3Vpcw==",
      img:"/instagram.svg"
    },
    {
      url:"https://github.com/Chaitanya-exe",
      img:"/github.svg"
    }
]