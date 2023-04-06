import React from "react";
// eslint-disable-next-line import/no-unresolved
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoffeeMachine from "../components/CoffeeMachine";

function MonCompe() {
  return (
    <div>
      <Navbar />
      <h1 className="text-darkblue text-xl text-center font-extrabold">
        La page est en construction mais en attendant vous pouvez prendre un
        petit café !
      </h1>
      <p className=" mt-[33%]">
        <CoffeeMachine />
      </p>

      <Footer />
    </div>
  );
}

export default MonCompe;
