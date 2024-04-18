import Image from "next/image";
import Homebanner from "./shared/Components/Homebanner/Homebanner";
import Dealscard from "./shared/Components/Dealscard/Dealscard";
import { title } from "process";

export default function Home() {
  const dealsContent = [
    {
      image: "/DEALS--OF-THE-MONTH.jpg",
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
      image: "/PROJECTS.jpg",
      title: "Our",
      description: "Projects",
      link: "/projects",
      btn: "View More",
    },
  ];

  return (
    <div>
      <Homebanner />

      <div className="px-12 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dealsContent.map((deal, index) => (
          <Dealscard
            key={index}
            image={deal.image}
            title={deal.title}
            description={deal.description}
            link={deal.link}
            btn={deal.btn}
            gridClasses={`${
              index === 0 ? "col-span-1 lg:col-span-1" : "col-span-1"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
