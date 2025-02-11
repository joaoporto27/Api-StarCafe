const express = require("express");
const router = express.Router();
const cafeController = require("../controllers/cafeController");

router.get("/menu", cafeController.getAllCafes);
router.post("/order", cafeController.addCafe);
router.get("/order/:id", cafeController.getCafeById);
router.delete("/order/:id", cafeController.deleteCafe);

module.exports = router;