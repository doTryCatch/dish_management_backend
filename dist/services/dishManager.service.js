"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dishManager = void 0;
const prisma_1 = require("../config/prisma");
class DishManager {
    async getAllDishes() {
        return prisma_1.prisma.dish.findMany();
    }
    async createDish(data) {
        return prisma_1.prisma.dish.create({ data });
    }
    async update(status, dishId) {
        console.log(status);
        const res = await prisma_1.prisma.dish.update({
            where: {
                dishId,
            },
            data: {
                isPublished: status,
            },
        });
        console.log(" status ", res);
        return res;
    }
}
exports.dishManager = new DishManager();
