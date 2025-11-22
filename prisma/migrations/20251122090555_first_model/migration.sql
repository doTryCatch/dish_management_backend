-- CreateTable
CREATE TABLE "Dish" (
    "dishId" SERIAL NOT NULL,
    "dishName" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Dish_pkey" PRIMARY KEY ("dishId")
);
