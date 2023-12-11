const jwt = require("jsonwebtoken");

const authorizationMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    jwt.verify(token, "parkinguserauthorization", function (err, decoded) {
      if (err) {
        res.status(400).send({ error: err.message });
      }
      req.body.user = decoded.user;
      next();
    });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

module.exports = authorizationMiddleware;
