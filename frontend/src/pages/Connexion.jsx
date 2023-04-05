import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import expressAPI from "../services/expressAPI";
import toastError from "../services/toastService";
// eslint-disable-next-line import/no-unresolved
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import vector from "../assets/icons/Vector.png";

import { useCurrentUserContext } from "../contexts/CurrentUserContext";

function Connexion() {
  const navigate = useNavigate();

  const { user, setUser } = useCurrentUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      expressAPI
        .post("/login", { email, password })
        .then((res) => {
          setUser(res.data.user.email);
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/Accueil");
        })
        .catch(() => toastError("Le mot de passe ou l'email est incorrect"));
    } else {
      toastError("Veuillez renseigner un email et un mot de passe");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-5">
        <div className="flex w-full">
          <div className="w-4/6">
            <h1 className="text-xl text-darkblue w-full font-semibold text-center ml-[4rem] md:text-3xl">
              Connectez vous
              <br /> sur votre espace
            </h1>
            <img
              src={vector}
              alt="vector"
              className="mb-4 mt-2 ml-14 w-screen md:hidden"
            />
            <div className="flex flex-row text-left ">
              <Link
                to="/creation"
                className="text-darkblue font-semibold text-sm ml-32 underline decoration-2 decoration-main-light md:ml-[95%]"
              >
                M'inscrire
              </Link>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col text-left gap-4 mt-5 mb-6 md:ml-[18rem] md:w-2/3"
            >
              <div className="mb-5 mt-5 flex flex-col">
                <label
                  htmlFor="email"
                  className="text-darkblue ml-12 font-semibold mb-1"
                >
                  Adresse mail
                </label>
                <input
                  className="border border-darkblue h-10 w-full ml-12 rounded md:w-full"
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="flex flex-col mb-10">
                <label
                  htmlFor="password"
                  className="text-darkblue ml-12 font-semibold mb-1"
                >
                  Mot de passe
                </label>
                <input
                  className="border border-darkblue w-full h-10 ml-12 rounded mb-2"
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                className="btn-rounded-blue  ml-24 lg:ml-[50%] md:mr-20  shadow-lg shadow-blue-500/50"
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

export default Connexion;
