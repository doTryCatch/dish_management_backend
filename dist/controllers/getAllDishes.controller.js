"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dishController = void 0;
const dishManager_service_1 = require("../services/dishManager.service");
const server_1 = require("../server");
class DishController {
    async GetAllDishes(req, res) {
        try {
            const data = await dishManager_service_1.dishManager.getAllDishes();
            console.log(data);
            if (data)
                res.status(201).json({
                    msg: "All data fetched sucessfully!",
                    success: true,
                    data,
                });
        }
        catch (error) {
            res.status(400).json({ error: "Server Error: failed fetching dishes!" });
        }
    }
    async UpdatePublishedStatus(req, res) {
        try {
            const data = req.body;
            if (!data.dishId || typeof data.dishId !== "number") {
                return res
                    .status(500)
                    .json({ error: "dish id is required and must be number" });
            }
            console.log(typeof data.isPublished);
            if (data.isPublished === undefined ||
                typeof data.isPublished !== "boolean") {
                return res.status(500).json({ error: "isPublished must be boolean" });
            }
            const result = await dishManager_service_1.dishManager.update(data.isPublished, data.dishId);
            // emit message to all connected clients with updated data
            server_1.io.sockets.emit("statusUpdated", result);
            res.status(201).json({
                msg: "updated status sucessfully!",
                success: true,
            });
        }
        catch (error) {
            res
                .status(400)
                .json({ err: "Server Error: failed updating dishes!", data: error });
        }
    }
    async CreateDish(req, res) {
        try {
            const data = req.body;
            if (typeof data.dishName !== "string") {
                return res
                    .status(400)
                    .json({ error: "name is required and must be string" });
            }
            else if (typeof data.imageUrl !== "string") {
                return res
                    .status(400)
                    .json({ error: "imageUrl is required and must be string" });
            }
            if (data.isPublished && typeof data.isPublished !== "boolean") {
                return res.status(400).json({ error: "isPublished must be boolean" });
            }
            const result = await dishManager_service_1.dishManager.createDish(data);
            console.log(result);
            if (result)
                res.status(201).json({
                    msg: "Dish Created sucessfully!",
                    success: true,
                    data,
                });
        }
        catch (error) {
            res.status(400).json({ msg: "Server Error: failed creating dish!" });
        }
    }
}
exports.dishController = new DishController();
