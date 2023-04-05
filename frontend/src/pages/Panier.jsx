import Footer from "@components/Footer";
// eslint-disable-next-line import/no-unresolved
import Navbar from "@components/Navbar";
import React from "react";
import { Link } from "react-router-dom";

function Panier() {
  const saveBasket = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
  };

  const getBasket = () => {
    const basket = localStorage.getItem("basket");
    if (basket === null) {
      return [];
    }
    return JSON.parse(basket);
  };

  // const addBasket = (product) => {
  //   const basket = getBasket();
  //   const foundProduct = basket.find((p) => p.id === product.id);
  //   if (foundProduct !== undefined) {
  //     foundProduct.quantity++;
  //   } else {
  //     product.quantity = 1;
  //     basket.push(product);
  //   }
  //   saveBasket(basket);
  // };

  const removeBasket = (product) => {
    let basket = getBasket();
    basket = basket.filter((p) => p.id !== product.id);
    saveBasket(basket);
  };

  const changeQuantity = (product, quantity) => {
    const basket = getBasket();
    const foundProduct = basket.find((p) => p.id === product.id);
    if (foundProduct !== undefined) {
      foundProduct.quantity += quantity;
      if (foundProduct.quantity <= 0) {
        removeBasket(product);
      } else {
        saveBasket(basket);
      }
    }
  };

  const getNumberProduct = () => {
    const basket = getBasket();
    let numberProduct = 0;
    for (const product of basket) {
      numberProduct += product.quantity;
    }
    return numberProduct;
  };

  const getTotalPrice = () => {
    const basket = getBasket();
    let totalPrice = 0;
    for (const product of basket) {
      totalPrice += product.price * product.quantity;
    }
    return totalPrice;
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-10">
        <h1 className="text-3xl text-center font-bold text-darkblue mb-5">
          Panier
        </h1>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-4">
            {getBasket().length > 0 ? (
              <div>
                {getBasket().map((product) => (
                  <div
                    key={product.id}
                    className="grid grid-cols-12 bg-white rounded-lg shadow-md p-5 gap-3"
                  >
                    <div className="col-span-2">
                      <img
                        className="w-full"
                        src={product.image}
                        alt={product.name}
                      />
                    </div>
                    <div className="col-span-6 flex flex-col justify-between">
                      <div>
                        <h2 className="text-lg font-bold">{product.name}</h2>
                        <p className="text-sm text-gray-500">
                          {product.description}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <button
                          type="button"
                          className="text-sm text-gray-500 hover:text-red-500"
                          onClick={() => removeBasket(product)}
                        >
                          Supprimer
                        </button>
                        <div>
                          <button
                            type="button"
                            className="text-gray-500 hover:text-red-500"
                            onClick={() => changeQuantity(product, -1)}
                          >
                            -
                          </button>
                          <button
                            type="button"
                            onClick={() => changeQuantity(product, -1)}
                          >
                            -
                          </button>
                          <span className="mx-2">{product.quantity}</span>
                          <button
                            type="button"
                            onClick={() => changeQuantity(product, 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-4 flex flex-col justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Prix unitaire</p>
                        <p className="text-lg font-bold">{product.price} €</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Prix total</p>
                        <p className="text-lg font-bold">
                          {product.price * product.quantity} €
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-darkblue text-center">Votre panier est vide</p>
            )}
          </div>
          <div className="col-span-4">
            <div className="bg-darkblue  w-[12rem] rounded-lg shadow-md p-5">
              <h2 className="text-lg font-bold mb-5">Récapitulatif</h2>
              <div className="flex justify-between items-center mb-5">
                <p>Sous-total</p>
                <p>{getTotalPrice()} €</p>
              </div>
              <div className="flex justify-between items-center mb-5">
                <p>Frais de port</p>
                <p>Gratuit</p>
              </div>
              <div className="flex justify-between items-center mb-5">
                <p>Total</p>
                <p>{getTotalPrice()} €</p>
              </div>
              <Link to="/confirmation">
                <button
                  type="button"
                  className="w-full bg-blue text-white rounded-lg py-3 font-bold"
                >
                  Valider mon panier
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <p className="text-darkblue ml-24">
        Total ({getNumberProduct()} produits) : {getTotalPrice()} €
      </p>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Panier;
