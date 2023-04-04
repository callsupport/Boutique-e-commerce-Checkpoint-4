import React from "react";
import { Link } from "react-router-dom";

import mail from "../assets/icons/Mail-Outline.png";
import phone from "../assets/icons/call-Outline.png";
import map from "../assets/icons/Map-Outline.png";

function Footer() {
  return (
    <div>
      <div className=" bg-blue  w-screen h-full text-center text-white">
        <h1>Nous Contacter :</h1>
        <p className="flex flex-row justify-center gap-1">
          <img src={mail} alt="mail" className="w-5 h-5" />
          contatc@gmail.com
        </p>
        <p className="flex flex-row justify-center gap-1">
          <img src={phone} alt="phone" className="w-5 h-5" />
          06 06 06 06 06
        </p>
        <p className="flex flex-row justify-center gap-1">
          <img src={map} alt="map" className="w-5 h-5" />
          12 rue de la paix, 75000 Paris
        </p>
        <Link to="/FAQ" className="text-white mx-4 mr-18">
          FAQ
        </Link>
      </div>
    </div>
  );
}

export default Footer;
