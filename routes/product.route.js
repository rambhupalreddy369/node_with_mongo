const express = require("express");

const router = express.Router();

// importing product functionalities from controllers

const {
  getProducts,
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct,
} = require("../controllers/product.controllers");

// add routing for getProducts

router.get("/", getProducts);

//addrouting for post products
router.post("/", createProduct);

//updating a product
router.put("/:id", updateProduct);

//getProduct by id
router.get("/:id", getProduct);

//delete product

router.delete("/:id", deleteProduct);

module.exports = router;
