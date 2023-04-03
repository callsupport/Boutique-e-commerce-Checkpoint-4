const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(users) {
    return this.database.query(
      `insert into ${this.table} (idusers, email, password, first_name, last_name, address) values (?, ?, ?, ?, ?, ?)`,
      [
        users.idusers,
        users.email,
        users.password,
        users.firstName,
        users.lastName,
        users.address,
      ]
    );
  }

  update(users) {
    return this.database.query(
      `update ${this.table} set email = ?, set password = ?  where id = ?`,
      [users.email, users.password, users.users.id]
    );
  }

  findByEmail(email) {
    return this.database.query(`select * from ${this.table} where email = ?`, [
      email,
    ]);
  }
}

module.exports = UsersManager;
