import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/productController.js";

const router = express.Router();

//index
router.get("/", getAllProducts);

//store
router.post("/", createProduct);

export default router;
