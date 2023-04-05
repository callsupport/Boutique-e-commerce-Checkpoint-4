import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Footer from "@components/Footer";
import toastError from "../services/toastService";
import expressAPI from "../services/expressAPI";
// eslint-disable-next-line import/no-unresolved
import Navbar from "../components/Navbar";
import vector from "../assets/icons/Vector.png";

function Creation() {
  const navigate = useNavigate();
  // eslint-disable-next-line import/no-unresolved
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();

    if ((email, password, firstName, lastName, address)) {
      expressAPI
        .post("/users", { email, password, firstName, lastName, address })
        .then(() => navigate("/Connexion"))
        .catch((err) => console.error(err));
    } else {
      toastError("Veuillez renseigner votre email et votre statut");
    }
  };

  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <div className="flex w-full mt-4">
        <div className="flex flex-row items-center justify-evenly w-full">
          <div>
            <h1 className="text-xl text-darkblue font-semibold text-center  md:text-3xl">
              Bienvenue !
            </h1>
            <img src={vector} alt="vector" className="mb-8 ml-6 md:hidden" />
            <div className="flex flex-row text-left">
              <p className="text-darkblue text-s pr-4 ml-8 md:ml-[55rem] md:mt-8">
                J'ai déjà un compte ?
              </p>
              <Link
                to="/Connexion"
                type="button"
                className="text-darkblue font-semibold text-sm underline decoration-2 decoration-main-light md:mt-8"
              >
                Me connecter
              </Link>
            </div>
            <form
              onSubmit={handleForm}
              className="flex flex-col text-left gap-4 mt-5 mb-6 md:ml-[18rem] md:w-2/3 "
            >
              <div className="mb-5 mt-5 flex flex-col">
                <label
                  htmlFor="email"
                  className="text-darkblue font-semibold ml-8 mb-1 "
                >
                  Adresse mail
                </label>
                <input
                  className="border border-darkblue h-10 rounded ml-8 w-[300px] md:w-5/6"
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="text-darkblue font-semibold mb-1 ml-8"
                >
                  Mot de passe
                </label>
                <input
                  className="border border-darkblue h-10 rounded mb-1  ml-8 w-[300px] md:w-5/6"
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="mb-2 flex flex-col">
                <label
                  htmlFor="firstname"
                  className="text-darkblue font-semibold mb-1 ml-8"
                >
                  Nom
                </label>
                <input
                  className="border border-darkblue h-10 rounded  ml-8 w-[300px] md:w-5/6"
                  type="text"
                  id="firstname"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </div>
              <div className="mb-2 flex flex-col">
                <label
                  htmlFor="lastname"
                  className="text-darkblue font-semibold mb-1 ml-8"
                >
                  Prénom
                </label>
                <input
                  className="border border-darkblue h-10 rounded  ml-8 w-[300px] md:w-5/6"
                  type="text"
                  id="lastname"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </div>
              <div className="mb-2 flex flex-col">
                <label
                  htmlFor="adress"
                  className="text-darkblue font-semibold mb-1 ml-8"
                >
                  Adresse
                </label>
                <input
                  className="border border-darkblue h-10 rounded  ml-8 w-[300px] md:w-5/6"
                  type="text"
                  id="address"
                  value={address}
                  onChange={handleAddressChange}
                />
              </div>
              <button
                className="btn-rounded-blue  ml-44 md:ml-[40%]   shadow-lg shadow-blue-500/50"
                type="submit"
              >
                Enregistrer
              </button>
            </form>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creation;
