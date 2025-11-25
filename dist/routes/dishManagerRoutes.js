"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getAllDishes_controller_1 = require("../controllers/getAllDishes.controller");
const router = (0, express_1.Router)();
router.get("/fetchAll", getAllDishes_controller_1.dishController.GetAllDishes);
router.post("/update", getAllDishes_controller_1.dishController.UpdatePublishedStatus);
router.post("/create", getAllDishes_controller_1.dishController.CreateDish);
exports.default = router;
