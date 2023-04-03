const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "product_items" });
  }

  insert(productsItems) {
    return this.database.query(
      `insert into ${this.table} (  product_id,
  quantity) values (?,?)`,
      [productsItems.productId, productsItems.quantity]
    );
  }

  update(productsItems) {
    return this.database.query(
      `update ${this.table} set product_id = ?, quantity = ? where id = ?`,
      [productsItems.productId, productsItems.quantity, productsItems.id]
    );
  }
}

module.exports = ItemManager;
