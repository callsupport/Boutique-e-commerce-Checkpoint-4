import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import expressAPI from "../services/expressAPI";

function ProductsCards({ name, description, price, category, image }) {
  const selectedimage = `${image}`;

  const [addedToCart, setAddedToCart] = useState(false);
  const [product] = useState([]);

  const handleAddToCart = ({ userId, itemId, quantity }) => {
    expressAPI
      .post("/cart", {
        userId,
        itemId,
        quantity,
      })
      .then(() => {
        setAddedToCart(true);
        // onAddToCart(Product);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="flex flex-col justify-between p-4 bg-white rounded-lg shadow">
      <div className="shadow p-4 rounded-lg bg-white">
        <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
          <div className="flex justify-center relative rounded-lg overflow-hidden h-90">
            <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full flex flex-col justify-center ">
              <p
                className="mt-2 text-2xl text-darkblue text-center line-clamp-1"
                title={`Catégorie ${category}`}
              >
                {category}
              </p>
              <img
                className="w-32 h-32 align-items-center justify-center mx-auto"
                src={`http://localhost:8005/${selectedimage}`}
                alt="Product"
              />
            </div>
          </div>
        </div>

        <div className="text-center block mt-4">
          <h2
            className="font-medium text-base md:text-lg text-darkblue line-clamp-1"
            title={name}
          >
            {name}
          </h2>

          <p className="flex items-center font-medium text-darkblue">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 mt-8">
          <div className="flex items-center">
            <Link to="/panier">
              <div>
                <h2>{name}</h2>
                <p>{price} €</p>
                {!addedToCart && (
                  <button type="button" onClick={handleAddToCart(product)}>
                    Ajouter au panier
                  </button>
                )}
                {addedToCart && <p>Produit ajouté au panier !</p>}
              </div>
            </Link>
          </div>

          <div className="flex justify-end">
            <p className=" text-darkblue inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
              <span className="text-lg">{price}</span>€
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductsCards.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ProductsCards;
