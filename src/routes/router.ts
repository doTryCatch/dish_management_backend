import { Router } from "express";
const router = Router();
import dishRoutes from "./dishManagerRoutes";
router.use("/dish", dishRoutes);

export default router;
