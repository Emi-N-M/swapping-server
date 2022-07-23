import { Router } from "express";
import {
  createImage,
  getImages,
  updateImage,
  deleteImage,
  getImage,
} from "../controllers/image.controller.js";

const router = Router();

// Routes
router.post("/", createImage);
router.put("/:id", updateImage);
router.delete("/:id", deleteImage);
router.get("/", getImages);
router.get("/:id", getImage);

export default router;
