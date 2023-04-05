import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/gsmicro_logo.png";

import Like from "../assets/icons/Like-Outline.png";
import Union from "../assets/icons/Union.png";
import User from "../assets/icons/User-Outline.png";

// eslint-disable-next-line import/no-unresolved
import SearchBar from "./searchbar";

function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <nav className=" bg-blue w-full">
      <div className="bg-blue h-20 md:h-32 inline-flex items-center justify-between shadow-nav mr-6">
        <div className="flex items-center justify-start">
          <Link
            to="/"
            className="flex items-center justify-start ml-8 w-full md:w-auto mt-4 md:mt-0"
          >
            <div className=" flex flex-row items-center justify-between mr-8">
              <img
                src={logo}
                alt="logo gsmicro"
                className="w-32 md:w-[40rem] max-w-[65%] mb-4"
              />
            </div>
          </Link>

          <Link to="/moncompte">
            <img
              src={User}
              alt="user"
              className="md:hidden w-20 max-w-[40%] mr-4"
            />
          </Link>
          <Link to="/panier">
            <img
              src={Union}
              alt="union"
              className="md:hidden w-10 max-w-[50%] mr-4"
            />
          </Link>
          <img src={Like} alt="like" className="md:hidden w-10 max-w-[6%]" />
        </div>
        <div className="hidden md:flex flex-row items-center justify-center w-full">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        <div className="hidden md:flex flex-row items-center justify-end w-[80%]">
          <Link to="/moncompte" className="text-white mx-4 ">
            Mon compte
          </Link>
          <Link to="/panier" className="text-white mx-4 mr-32">
            Mon panier
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
