import React from "react";

function CoffeeMachine() {
  return (
    <div className="container w-96 h-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="coffee-header w-full h-20 absolute top-0 left-0 bg-gray-300 rounded-lg">
        <div className="coffee-header__buttons coffee-header__button-one w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-6 bg-gray-800 rounded-full"></div>
        <div className="coffee-header__buttons coffee-header__button-two w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-20 bg-gray-800 rounded-full"></div>
        <div className="coffee-header__display w-12 h-12 absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400 border-4 border-teal-500"></div>
        <div className="coffee-header__details w-2 h-8 absolute top-2 right-2 bg-gray-500"></div>
      </div>
      <div className="coffee-medium w-11/12 h-60 absolute top-20 left-1/2 transform -translate-x-1/2 bg-gray-400">
        <div className="coffee-medium__exit w-24 h-6 absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-900"></div>
        <div className="coffee-medium__arm w-20 h-6 absolute top-3 right-3 bg-gray-900">
          <div className="w-4 h-1 absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-300"></div>
        </div>
        <div className="coffee-medium__liquid w-full h-32 absolute bottom-0 left-0 bg-gray-700"></div>
        <div className="coffee-medium__smoke coffee-medium__smoke-one w-4 h-16 absolute top-4 left-1/4 bg-gray-600"></div>
        <div className="coffee-medium__smoke coffee-medium__smoke-two w-4 h-16 absolute top-2 left-1/2 bg-gray-600"></div>
        <div className="coffee-medium__smoke coffee-medium__smoke-three w-4 h-16 absolute top-6 left-3/4 bg-gray-600"></div>
        <div className="coffee-medium__smoke coffee-medium__smoke-four w-4 h-16 absolute top-8 left-0 bg-gray-600"></div>
        <div className="coffee-medium__cup w-32 h-16 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white rounded-b-lg"></div>
      </div>
      <div className="coffee-footer w-full h-16 absolute bottom-0 left-0 bg-gray-300"></div>
    </div>
  );
}

export default CoffeeMachine;
