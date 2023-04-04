import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// PAGES
import UserContextProvider from "./contexts/CurrentUserContext";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Creation from "./pages/Creation";
import Logout from "./pages/Logout";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Coques from "./pages/Coques";
import Films from "./pages/Films";
import Chargeurs from "./pages/Chargeurs";
import AllCategories from "./pages/AllCategories";
import Panier from "./pages/Panier";

import FAQ from "./pages/FAQ";

// CSS
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creation" element={<Creation />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/Accueil" element={<Categories />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/categories" element={<Products />} />
          <Route path="/coques" element={<Coques />} />
          <Route path="/films" element={<Films />} />
          <Route path="/chargeurs" element={<Chargeurs />} />
          <Route path="/tous" element={<AllCategories />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <ToastContainer />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
