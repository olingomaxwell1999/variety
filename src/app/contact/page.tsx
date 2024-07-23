import React from "react";
import ContactArea from "../shared/Components/Contactarea/Contactarea";
import MapComponent from "../shared/Components/Map/Map";
import Banner from "../shared/Components/Banner/Banner";

const Page = () => {
  const bannerContent = [
    {
      backgroundImage: "/Contact-Us-Page.jpg",
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
