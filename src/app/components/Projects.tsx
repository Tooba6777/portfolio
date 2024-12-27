import React from 'react';
import Heading from "./Heading";
import Card from "./Card";

const data = [
    {
        id: 1,
        title: "Dynamic Interactive Resume",
        desc: "A typescript-based interactive resume built with HTML & CSS, allowing users to showcase their skills dynamically",
        link: "https://milestone-3-eight-mu.vercel.app/",
        image:"",
        tags: ["React", "Node", "CSS", "Typescript"],
    }, 
    {
        id: 3,
        title: "Editable Resume Builder",
        desc: "A typescript-based interactive resume built with HTML & CSS, allowing users to showcase their skills editablly",
        link: "https://milestone-4-zeta-one.vercel.app/",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 4,
        title: "Shareable Resume Builder",
        desc: "A typescript-based interactive resume built with HTML & CSS, allowing users to showcase their skills shareable",
        link:"https://milestone-5-psi-five.vercel.app/",
        tags: ["React", "Node", "CSS", "Typescript"],
    }, 
    {
        id: 5,
        title: "Static Interactive Resume",
        desc:"A typescript-based static interactive resume built with HTML & CSS showing aur own skills, qualification",
        link:"https://hackhton-milestone.vercel.app/",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 6,
        title:"Calculator",
        desc:"A typescript-based calculator built with typescript showing mathematical claculation dynamically",
        link:"https://cli-calculator-one.vercel.app/?vercelToolbarCode=sJFa6xokbBSDkfD",
        tags: ["Node", "Typescript"],
    },
    {
        id: 7,
        title: "template",
        desc:"A html or css based fast food front page",
        link:"https://template-rwen.vercel.app/",
        tags:["HTML", "CSS"]
    }
]

const project = () => {
  return (
    <div id="projects"className="container pt-32">
        <Heading title="My projects" />
        <div className="grid gap-10 xl/:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-centre">
        {data.map((element) => (<Card
        key={element.id}
        image='image'
        title={element.title}
        desc={element.desc}
        tags={element.tags}
        />))}
        </div>
    </div>
  )
}

export default project;
