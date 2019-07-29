const router = require("express").Router();
const bookRoutes = require("./Books");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
