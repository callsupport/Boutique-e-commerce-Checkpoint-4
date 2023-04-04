import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import expressAPI from "../services/expressAPI";

function Panier() {
  const [articles, setArticles] = useState([]);
  const [articleToUpdate, setArticleToUpdate] = useState({});

  useEffect(() => {
    expressAPI.get("/cart").then((response) => {
      //   console.log(response.data);
      setArticles(response.data);
    });
  }, []);

  const handleArticleChange = (event) => {
    // console.log(event.target.value);
    setArticleToUpdate({
      ...articleToUpdate,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(articleToUpdate);
    expressAPI
      .patch(`/cart/${articleToUpdate.id}`, articleToUpdate)
      .then((response) => {
        // console.log(response.data);
        setArticles(response.data);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="mt-5 text-darkblue font-bold text-xl text-center">
        <h1>Mon panier</h1>
      </div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <p>{article.name}</p>
            <p>{article.price}</p>
            <p>{article.quantity}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Id :
          <input
            type="number"
            name="id"
            value={articleToUpdate.id}
            onChange={handleArticleChange}
          />
        </label>
        <label>
          Name :
          <input
            type="text"
            name="name"
            value={articleToUpdate.name}
            onChange={handleArticleChange}
          />
        </label>
        <label>
          Price :
          <input
            type="number"
            name="price"
            value={articleToUpdate.price}
            onChange={handleArticleChange}
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
      <Footer />
    </div>
  );
}

export default Panier;
