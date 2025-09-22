import { NavLink, useNavigate } from "react-router-dom";
import userLogo from "../assets/user.png";
const Navbar = () => {
  const links = [
    { id: 1, name: "Home", route: "/" },
    { id: 2, name: "About", route: "/about" },
    { id: 3, name: "Career", route: "/career" },
    // { id: 4, name: "Login", route: "/auth/login" },
    // { id: 5, name: "Register", route: "/auth/register" },
  ];

  const navigate = useNavigate();
  const goToLoginPage = () => {
    navigate("/auth/login");
  };

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
        <button
          onClick={goToLoginPage}
          className="ms-2 bg-blue-300 text-white px-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
