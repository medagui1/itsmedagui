import { carousel } from "../constants/carousel";

const LogoCarousel = () => {
  return (
    <div className="logos-slide flex ">
      <div className="flex gap-12">
        {carousel.map((logo, index) => (
          <div className="text-center logo-slider-item p-4" key={index}>
            <div>{logo.img}</div>
            <p className="title"> {logo.alt} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
