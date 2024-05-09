const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
      return res.status(401).send("Token error");
    }
    req.locals = verifyToken.userId;
    next();
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = auth;

// const jwt = require('jsonwebtoken');

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403); // Invalid token
//     req.user = user;
//     next();
//   });
// }

