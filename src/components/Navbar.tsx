import { NavLink } from "react-router-dom";
import userLogo from "../assets/user.png";
const Navbar = () => {
  const links = [
    { id: 1, name: "Home", route: "/" },
    { id: 2, name: "About", route: "/about" },
    { id: 3, name: "Login", route: "/login" },
    { id: 4, name: "Register", route: "/register" },
  ];

  return (
    <div className="flex justify-between items-center shadow-sm">
      <div></div>
      <div className="flex">
        {links.map((link) => {
          return (
            <NavLink
              key={link.id}
              to={link.route}
              className="bg-none mx-2 hover:text-blue-300"
            >
              {link.name}
            </NavLink>
          );
        })}
      </div>
      <div className="flex">
        <img src={userLogo} className="rounded-2xl" alt="" />
        <button className="ms-2 bg-blue-300 text-white px-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
