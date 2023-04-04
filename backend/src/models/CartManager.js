const AbstractManager = require("./AbstractManager");

class CartManager extends AbstractManager {
  constructor() {
    super({ table: "cart" });
  }

  insert(cart) {
    return this.database.query(
      `insert into ${this.table} (user_id, item_id, quantity) values (?,?,?)`,
      [cart.userId, cart.itemId, cart.quantity]
    );
  }

  update(cart) {
    return this.database.query(
      `update ${this.table} set user_id = ?, item_id = ?, quantity = ? where id = ?`,
      [cart.userId, cart.itemId, cart.quantity, cart.id]
    );
  }
}

module.exports = CartManager;
