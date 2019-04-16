const router = require("express").Router();
const booksController = require("../controllers");

router.route("/api/save")
    .post(booksController.create);

router.route("/api/saved")
    .get(booksController.findAll);

module.exports = router; 