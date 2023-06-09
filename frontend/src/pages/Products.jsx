import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import expressAPI from "../services/expressAPI";

import ProductsCards from "../components/ProductsCards";
// eslint-disable-next-line import/no-unresolved
import Navbar from "../components/Navbar";
// eslint-disable-next-line import/no-unresolved
import vector from "../assets/icons/vector.png";

function Products() {
  const [search] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    expressAPI.get(`/produits`).then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mt-5 text-darkblue font-bold text-xl text-center">
        <div className="mt-3 ml-2 text-darkblue font-bold text-lg font-feli ">
          <span>Nos Catégories</span>
          <img src={vector} alt="vector" className="ml-4 md:hidden" />
        </div>
        <div className="flex " />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-8">
        {products
          .filter(
            (elem) =>
              elem.name.toLowerCase().includes(search.toLowerCase()) ||
              elem.description.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => (
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

      {products.filter(
        (elem) =>
          elem.name.toLowerCase().includes(search.toLowerCase()) ||
          elem.description.toLowerCase().includes(search.toLowerCase())
      ).length === 0 && (
        <div className="flex items-center col-span-3  flex-col" />
      )}
    </div>
  );
}

export default Products;
