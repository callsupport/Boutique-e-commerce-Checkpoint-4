import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import React from "react";

function confirmation() {
  return (
    <div>
      <Navbar />
      <h1 className="text-darkblue text-center text-2xl  mt-12 font-extrabold">
        Merci de votre commande{" "}
      </h1>
      <p className="text-darkblue mt-32 text-center ml-6 mr-6">
        Votre commande n°121212 est en cours de préparation, vous receverez un
        email pour suivre la progression{" "}
      </p>

      <div
        className="mt-[50%]
      "
      >
        <Footer />
      </div>
    </div>
  );
}

export default confirmation;
