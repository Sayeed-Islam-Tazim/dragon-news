import Marquee from "react-fast-marquee";
import logo from "../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <img className="py-2 mt-5" src={logo} alt="" />
        <p className="text-blue-300">Journalism with Fear & Favour</p>
        <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
      </div>
      <div className="flex bg-gray-200 mt-2 px-2">
        <button className="btn btn-sm bg-blue-300 border-0 my-2 me-2">
          Latest
        </button>
        <Marquee className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          asperiores, corporis magni veritatis rerum odio soluta, at,
          exercitationem deleniti blanditiis velit!
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
