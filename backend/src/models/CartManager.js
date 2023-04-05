const AbstractManager = require("./AbstractManager");

class CartManager extends AbstractManager {
  constructor() {
    super({ table: "cart" });
  }

  insert(cart, userId) {
    return this.database.query(
      `insert into ${this.table} (user_id, item_id, quantity) values (?,?,?)`,
      [userId, cart.itemId, cart.quantity]
    );
  }

  update(cart, userId) {
    return this.database.query(
      `update ${this.table} set user_id = ?, item_id = ?, quantity = ? where id = ?`,
      [userId, cart.itemId, cart.quantity, cart.id]
    );
  }
}

module.exports = CartManager;
