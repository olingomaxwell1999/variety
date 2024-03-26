import { ReactNode } from "react";

interface BannerProps {
  backgroundImage: string;
  text: string;
}

const Banner: React.FC<BannerProps> = ({ backgroundImage, text }) => {
  return (
    <div
      className="banner relative bg-cover bg-center flex items-center justify-center"
      style={{ height: "350px", backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-center">
        <h1 className="text-white text-4xl">{text}</h1>
      </div>
    </div>
  );
};

export default Banner;
