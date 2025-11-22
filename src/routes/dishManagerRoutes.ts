import { Router } from "express";
import { dishController } from "../controllers/getAllDishes.controller";
const router = Router();
router.get("/fetchAll", dishController.GetAllDishes);
router.post("/update", dishController.UpdatePublishedStatus);
router.post("/create", dishController.CreateDish);
export default router;
