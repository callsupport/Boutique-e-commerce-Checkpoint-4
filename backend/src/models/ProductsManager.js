const AbstractManager = require("./AbstractManager");

class ProductsManager extends AbstractManager {
  constructor() {
    super({ table: "products" });
  }

  findAllProducts() {
    return this.database.query(
      `select ${this.table}.*, cart.* from  ${this.table} JOIN cart ON products.products_id = cart.products_products_id `
    );
  }

  insert(products) {
    return this.database.query(
      `insert into ${this.table} (
  name
  description
  price
  category
  image) values (?, ?, ?, ?, ?)`,
      [
        products.name,
        products.description,
        products.price,
        products.category,
        products.image,
      ]
    );
  }

  update(products) {
    return this.database.query(
      `update ${this.table} set name = ?, description = ?, price = ?, category = ?, image = ? where products_id = ?`,
      [
        products.name,
        products.description,
        products.price,
        products.category,
        products.image,
        products.productsId,
      ]
    );
  }

  findPhone(id) {
    return this.database.query(
      `select * from  ${this.table} where products_id = ?`,
      [id]
    );
  }
}

module.exports = ProductsManager;
