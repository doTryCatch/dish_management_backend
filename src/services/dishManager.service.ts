import { prisma } from "../config/prisma";
interface dishDTO {
  dishName: string;
  imageUrl: string;
  isPublished?: boolean;
}
class DishManager {
  async getAllDishes() {
    return prisma.dish.findMany();
  }
  async createDish(data: dishDTO) {
    return prisma.dish.create({ data });
  }

  async update(status: boolean, dishId: number) {
    console.log(status);
    const res = await prisma.dish.update({
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
export const dishManager = new DishManager();
