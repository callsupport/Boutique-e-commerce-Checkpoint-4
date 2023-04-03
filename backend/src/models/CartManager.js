const AbstractManager = require("./AbstractManager");

class CartManager extends AbstractManager {
  constructor() {
    super({ table: "cart" });
  }

  insert(cart) {
    return this.database.query(
      `insert into ${this.table} (user_id, item_id) values (?, ?)`,
      [cart.userId, cart.itemId]
    );
  }

  update(cart) {
    return this.database.query(
      `update ${this.table} set user_id = ?, set item_id = ? where id = ?`,
      [cart.id, cart.userId, cart.itemId]
    );
  }
}

module.exports = CartManager;
