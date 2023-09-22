const login = require("../controllers/login");
const getCharById = require("../controllers/getCharById");
const deleteFav = require("../controllers/deleteFav");
const postFav = require("../controllers/postFav");
const postUser = require("../controllers/postUser");

const router = require("express").Router();

router.get("/login", login);
console.log("a");
router.get("/character/:id", getCharById);
console.log("b");
router.post("/login", postUser);
console.log("c");
router.post("/fav", postFav);
console.log("d");
router.delete("/fav/:id", deleteFav);
console.log("e");
module.exports = router;
console.log("f");
