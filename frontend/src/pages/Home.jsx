// eslint-disable-next-line import/no-unresolved
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import logo from "../assets/images/gsmicro_logo.png";
// eslint-disable-next-line import/no-unresolved
import home from "../assets/images/home.jpeg";

export default function Home() {
  return (
    <header className="">
      <img src={logo} className="h-32 absolute w-full md:h-72 " alt="logo" />
      <Link to="/connexion">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500" />
          <img
            src={home}
            className="h-screen md:h-screen md:w-screen relative z-10"
            alt="home"
          />
        </div>
      </Link>
    </header>
  );
}
