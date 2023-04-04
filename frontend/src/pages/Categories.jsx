import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import expressAPI from "../services/expressAPI";
import ProductsCards from "../components/ProductsCards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// eslint-disable-next-line import/no-unresolved
import vector from "../assets/icons/vector.png";
// eslint-disable-next-line import/no-unresolved
import coques from "../assets/images/coques.png";
// eslint-disable-next-line import/no-unresolved
import films from "../assets/images/film.png";
// eslint-disable-next-line import/no-unresolved
import chargeur from "../assets/images/chargeur.png";
// eslint-disable-next-line import/no-unresolved
import chevron from "../assets/images/chevron.svg";

function Products() {
  const navigate = useNavigate();
  const [search] = useState("");
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    expressAPI.get(`/produits`).then((res) => {
      setProducts(res.data);
    });
  }, []);

  const filteredProducts = products.filter(
    (elem) =>
      elem.name.toLowerCase().includes(search.toLowerCase()) &&
      (!category || elem.category === category)
  );

  return (
    <div>
      <Navbar />
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}

      <a
        href="/accueil"
        className="text-darkblue inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-main hover:underline"
      >
        <img src={chevron} alt="chevron" />
        retour
      </a>
      <div className="mt-5 text-darkblue font-bold text-xl text-center">
        <div className="mt-3 ml-2 text-darkblue font-bold text-3xl mb-8 font-feli ">
          <span>Nos Catégories</span>
          <img src={vector} alt="vector" className="ml-4 md:hidden" />
        </div>
        <div className=" md:flex-row  md:justify-center flex flex-col items-center gap-8 mb-12  ">
          <button
            type="button"
            onClick={() => {
              setCategory("");
              navigate("/tous");
            }}
            className="bg-blue text-white rounded-full px-4 py-2 md:hidden"
          >
            Toutes
          </button>
          Coques
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
          <img
            src={coques}
            alt="Coques"
            onClick={() => {
              setCategory("coques");
              navigate("/coques");
            }}
            className="cursor-pointer w-1/2 md:w-1/4"
          />
          Films
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
          <img
            src={films}
            alt="films"
            onClick={() => {
              setCategory("films");
              navigate("/films");
            }}
            className="cursor-pointer w-1/2 md:w-1/4"
          />
          Chargeurs
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
          <img
            src={chargeur}
            alt="chargeurs"
            onClick={() => {
              setCategory("chargeurs");
              navigate("/chargeurs");
            }}
            className="cursor-pointer w-1/2 md:w-1/4"
          />
        </div>
      </div>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}

      <div className="hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-8">
        {filteredProducts.map((product) => (
          <Link key={product.productId} to={`/produits/${product.productId}`}>
            <ProductsCards
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
              category={product.category}
            />
          </Link>
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <div className="flex items-center col-span-3  flex-col" />
      )}
      <Footer />
    </div>
  );
}

export default Products;
