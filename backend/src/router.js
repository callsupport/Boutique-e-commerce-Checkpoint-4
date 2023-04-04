const express = require("express");

const router = express.Router();

const usersControllers = require("./controllers/usersControllers");
const productsControllers = require("./controllers/productsControllers");
const productItemsControllers = require("./controllers/productItemsControllers");
const cartControllers = require("./controllers/cartControllers");
const auth = require("./middlewares/auth");

router.get("/users", auth, usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.post("/users", usersControllers.add);
router.delete("/users/:id", usersControllers.destroy);

router.post("/login", usersControllers.login);
router.get("/logout", usersControllers.logout);

router.get("/produits", productsControllers.browse);
router.get("/produits/:id", productsControllers.read);
router.post("/produits", productsControllers.add);
router.delete("/produits/:id", productsControllers.destroy);

router.get("/categories", productItemsControllers.browse);
router.get("/categories/:id", productItemsControllers.read);
router.post("/categories", productItemsControllers.add);
router.delete("/categories/:id", productItemsControllers.destroy);

router.get("/cart", cartControllers.browse);
router.get("/cart/:id", cartControllers.read);
router.post("/cart", cartControllers.add);
router.patch("/cart/:id", cartControllers.update);

router.delete("/cart/:id", cartControllers.destroy);

module.exports = router;
