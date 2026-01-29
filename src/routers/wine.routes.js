import { Router } from "express";
import * as wineController from "../controllers/wine.controller.js";

const router = Router();

// GET all wines
router.get("/wines", wineController.getAllWines);

// GET wine by id
router.get("/wines/:id", wineController.getWineById);

// POST all wines
router.post("/wines", wineController.createWine);

router.put("/wines/:id", wineController.updateWine);

router.delete("/wines/:id", wineController.deleteWine)

export default router;
