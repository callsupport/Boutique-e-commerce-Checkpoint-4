import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import expressAPI from "../services/expressAPI";
import ProductsCards from "../components/ProductsCards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// eslint-disable-next-line import/no-unresolved
import vector from "../assets/icons/vector.png";
// eslint-disable-next-line import/no-unresolved
import chevron from "../assets/images/chevron.svg";

function Chargeurs() {
  const [search] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    expressAPI.get(`/produits`).then((res) => {
      setProducts(res.data);
    });
  }, []);

  const filteredProducts = products.filter(
    (elem) =>
      elem.name.toLowerCase().includes(search.toLowerCase()) &&
      elem.category === "chargeur"
  );

  return (
    <div>
      <Navbar />
      <a
        href="/accueil"
        className="text-darkblue inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-main hover:underline"
      >
        <img src={chevron} alt="chevron" />
        retour
      </a>
      <div className="mt-5 text-darkblue font-bold text-xl text-center">
        <div className="mt-3 ml-2 text-darkblue font-bold text-3xl mb-8 font-feli ">
          <span>Nos Chargeurs</span>
          <img src={vector} alt="vector" className="ml-4 md:hidden" />
        </div>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-8">
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

export default Chargeurs;
