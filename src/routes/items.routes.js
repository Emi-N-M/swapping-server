import { Router } from "express";
import {
  getItems,
  createItem,
  updateItem,
  getItem,
  deleteItem,
  getItemImages,
} from "../controllers/item.controller.js";

const router = Router();

// Routes
router.post("/", createItem);
router.get("/", getItems);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);
router.get("/:id", getItem);

router.get("/:id/items", getItemImages);

export default router;
