import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LeftAside from "../components/LeftAside";
import RightAside from "../components/RightAside";

const HomeLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-11/12">
      <header className="mb-2">
        <Header />
      </header>
      <nav className="w-full">
        <Navbar />
      </nav>
      <main className="my-4 w-full grid grid-cols-12">
        <aside className="col-span-3">
          <LeftAside />
        </aside>
        <section className="col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default HomeLayout;
