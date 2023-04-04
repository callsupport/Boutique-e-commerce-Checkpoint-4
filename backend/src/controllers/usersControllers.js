const models = require("../models");
const validateUser = require("../validator/userValidator");

const { hashPassword, verifyPassword } = require("../services/hashingService");
const { encodeJWT } = require("../services/jwtService");

const browse = (req, res) => {
  models.users
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.users
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  const validationResult = validateUser(user);

  if (validationResult) {
    return res.status(400).send(validationResult);
  }

  user.id = parseInt(req.params.id, 10);

  return models.users
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = async (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  const validationResult = validateUser(user);

  if (validationResult.length) {
    return res.status(400).send(validationResult);
  }

  const hashedPassword = await hashPassword(req.body.password);

  user.password = hashedPassword;

  return models.users
    .insert(user)
    .then(([result]) => {
      res.location(`/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.users
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const login = async (req, res) => {
  const users = req.body;

  const [persistedUser] = await models.users.findByEmail(users.email);

  if (!persistedUser[0]) {
    res.sendStatus(401);
    return;
  }

  const verif = await verifyPassword(persistedUser[0].password, users.password);

  if (verif) {
    delete persistedUser[0].password;
    const token = encodeJWT(persistedUser[0]);

    res.cookie("auth_token", token, { httpOnly: true, secure: false });

    res.send({ user: persistedUser[0] });
  } else {
    res.sendStatus(401);
  }
};

const logout = (req, res) => {
  res.clearCookie("auth_token").sendStatus(200);
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  login,
  logout,
};
