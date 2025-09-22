import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center w-11/12 py-4 mx-auto">
      <nav className="w-full">
        <Navbar />
      </nav>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
