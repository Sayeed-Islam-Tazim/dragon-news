import Header from "../components/Header";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-11/12 mx-auto">
      <header className="mb-2">
        <Header />
      </header>
      <nav className="w-full">
        <Navbar />
      </nav>
      <h2>About Page</h2>
    </div>
  );
};

export default About;
