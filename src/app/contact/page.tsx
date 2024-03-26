import React from "react";
import Banner from "../shared/Components/Banner/Banner";
import ContactArea from "../shared/Components/Contactarea/Contactarea";
import MapComponent from "../shared/Components/Map/Map";

const Page = () => {
  const bannerContent = [
    {
      backgroundImage: "/banner.jpg",
      text: "Contact Us",
    },
  ];

  return (
    <div>
      {bannerContent.map((content, index) => (
        <Banner
          key={index}
          backgroundImage={content.backgroundImage}
          text={content.text}
        />
      ))}
      <ContactArea />
      <MapComponent />
    </div>
  );
};

export default Page;
