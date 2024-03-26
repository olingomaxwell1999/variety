import Link from "next/link";
import React from "react";

interface DealscardProps {
  title: string;
  image: string;
  description: string;
  link: string;
  btn: string;
}

const Dealscard: React.FC<DealscardProps> = ({
  title,
  image,
  description,
  link,
  btn,
}) => {
  return (
    <div className="deals-card">
      <div className="image-area">
        <img src={image} alt={title} />
      </div>
      <div className="content-area">
        <div className="top">
          <p>{title}</p>
          <h2>{description}</h2>
        </div>
        <Link href={link}>
          <button className="button-brown">{btn}</button>
        </Link>
      </div>
    </div>
  );
};

export default Dealscard;
