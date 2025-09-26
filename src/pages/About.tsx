import Header from "../components/Header";
import Navbar from "../components/Navbar";
import image1 from "../assets/carousel-images/20008369_6229091.jpg";
import image2 from "../assets/carousel-images/20498320_a8dr_05f3_210816.jpg";
import image3 from "../assets/carousel-images/sunset-silhouettes-trees-mountains-generative-ai (1).jpg";
import image4 from "../assets/carousel-images/sunset-silhouettes-trees-mountains-generative-ai (2).jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const destinations = [
  {
    city: "Kathmandu",
    image: image1,
    hotels: "1,152 Hotels Available",
  },
  {
    city: "Bangkok",
    image: image2,
    hotels: "4,351 Hotels Available",
  },
  {
    city: "Singapore",
    image: image3,
    hotels: "813 Hotels Available",
  },
  {
    city: "Kuala Lumpur",
    image: image4,
    hotels: "2,464 Hotels Available",
  },
];

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-11/12 mx-auto">
      <header className="mb-2">
        <Header />
      </header>
      <nav className="w-full">
        <Navbar />
      </nav>
      <h2>About</h2>
      <div className="w-full max-w-6xl mx-auto py-10">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="w-full"
        >
          {destinations.map((d, i) => (
            <SwiperSlide
              key={i}
              className="w-[250px] h-[350px] rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative w-full h-full">
                <img
                  src={d.image}
                  alt={d.city}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-3">
                  <p className="font-semibold text-lg">{d.city}</p>
                  <p className="text-sm">{d.hotels}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default About;
