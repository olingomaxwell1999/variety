import Image from "next/image";
import Homebanner from "./shared/Components/Homebanner/Homebanner";
import Dealscard from "./shared/Components/Dealscard/Dealscard";
import { title } from "process";

export default function Home() {
  const dealsContent = [
    {
      image: "/dealsofthemonth.jpg",
      link: "/deals",
      title: "Deals of the",
      description: "Month",
      btn: "View More",
    },

    {
      image: "/View-More.jpg",
      title: "New",
      description: "Products",
      link: "/new-products",
      btn: "View More",
    },
    {
      image: "/Projects.jpg",
      title: "New",
      description: "Products",
      link: "/new-products",
      btn: "View More",
    },
  ];

  return (
    <div>
      <Homebanner />

      <div className="deals-area">
        {dealsContent.map((deal, index) => (
          <Dealscard
            key={index}
            image={deal.image}
            title={deal.title}
            description={deal.description}
            link={deal.link}
            btn={deal.btn}
          />
        ))}
      </div>
    </div>
  );
}
