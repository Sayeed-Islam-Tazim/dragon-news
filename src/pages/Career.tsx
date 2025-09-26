import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useState } from "react";
import image1 from "../assets/carousel-images/20008369_6229091.jpg";
import image2 from "../assets/carousel-images/20498320_a8dr_05f3_210816.jpg";
import image3 from "../assets/carousel-images/sunset-silhouettes-trees-mountains-generative-ai (1).jpg";
import image4 from "../assets/carousel-images/sunset-silhouettes-trees-mountains-generative-ai (2).jpg";

const cities = [
  {
    name: "Chennai",
    hotels: "1,497 Hotels Available",
    img: image1,
  },
  {
    name: "Kathmandu",
    hotels: "1,152 Hotels Available",
    img: image2,
  },
  {
    name: "Bangkok",
    hotels: "4,351 Hotels Available",
    img: image3,
  },
  {
    name: "Singapore",
    hotels: "813 Hotels Available",
    img: image4,
  },
  {
    name: "Chennai",
    hotels: "1,497 Hotels Available",
    img: image1,
  },
  {
    name: "Kathmandu",
    hotels: "1,152 Hotels Available",
    img: image2,
  },
  {
    name: "Bangkok",
    hotels: "4,351 Hotels Available",
    img: image3,
  },
  {
    name: "Singapore",
    hotels: "813 Hotels Available",
    img: image4,
  },
];

const Career = () => {
  const [active, setActive] = useState(1); // middle card

  return (
    // <div className="flex flex-col items-center justify-center w-11/12 mx-auto">
    //   <header className="mb-2">
    //     <Header />
    //   </header>
    //   <nav className="w-full">
    //     <Navbar />
    //   </nav>
    //   <h2>Career Page</h2>
    // </div>
    // <div className="w-11/12">
    //   <div className="flex justify-center items-center h-screen bg-gray-100">
    //     <div className="flex gap-2 perspective-[1200px]">
    //       {cities.map((city, i) => {
    //         const offset = i - active;
    //         return (
    //           <div
    //             key={i}
    //             onClick={() => setActive(i)}
    //             className={`relative w-32 h-48 rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-500`}
    //             style={{
    //               transform: `
    //               perspective(1200px)
    //               translateX(${offset * 220}px)
    //               rotateY(${offset * -20}deg)
    //               scale(${i === active ? 1.1 : 0.9})
    //             `,
    //               zIndex: i === active ? 20 : 10 - Math.abs(offset),
    //             }}
    //           >
    //             <img
    //               src={city.img}
    //               alt={city.name}
    //               className="absolute inset-0 w-full h-full object-cover"
    //             />
    //             <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
    //               <h3 className="text-lg font-semibold">{city.name}</h3>
    //               <p className="text-sm">{city.hotels}</p>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col items-center justify-center w-11/12 mx-auto h-screen">
      <header className="mb-2">
        <Header />
      </header>
      <nav className="w-full mb-2">
        <Navbar />
      </nav>
      <div
        className="relative w-full overflow-hidden h-[420px] perspective-[1200px]"
        data-carousel="slide"
      >
        {cities.map((city, i) => {
          const offset = i - active;

          // handle position, rotation, and scale
          let transform = `translateX(${offset * 260}px) rotateY(${
            offset * -25
          }deg) scale(${i === active ? 1 : 0.9})`;

          return (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={` absolute top-0 left-1/2 w-60 h-[420px] -translate-x-1/2 rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-500 ease-in-out`}
              data-carousel-item
              style={{
                transform,
                zIndex: i === active ? 50 : 30 - Math.abs(offset),
              }}
            >
              <img
                src={city.img}
                alt={city.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-lg font-semibold">{city.name}</h3>
                <p className="text-sm">{city.hotels}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Career;
