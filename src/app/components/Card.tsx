import React from 'react'
import Image from "next/image"

interface propsType {
    title: string;
    desc: string;
    image: string;
    tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, image, tags}) => {
  return (
    <div className="border border-accent w-[300px] sm:w-[350px]">
    <div>
    <Image className="w-[300px] sm:w-[350px] h-auto"
    src={image}
    width={350}
    height={350}
    alt={title}
    />
    </div>

    <div className="p-4 space y-4">
        <div className="text-4x; font-extralight">{title}</div>
        <div>{desc}</div>
        <div>
            {tags.map((element) => (
                <div className="tags" key={element}>
                    {element}
                </div>))}
        </div>
    </div>
    </div>
  )
}

export default Card;
