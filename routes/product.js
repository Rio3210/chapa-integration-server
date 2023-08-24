import express from "express";
import { getProducts, createProduct } from "../controllers/product.js";
const router= express.Router();

router.post("/products",createProduct );

router.get("/products", getProducts);

export default router;