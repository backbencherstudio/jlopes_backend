/*
  Warnings:

  - You are about to drop the column `testimonial_id` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `testimonials` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `testimonials` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_testimonial_id_fkey";

-- AlterTable
ALTER TABLE "testimonials" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "testimonial_id";

-- CreateIndex
CREATE UNIQUE INDEX "testimonials_userId_key" ON "testimonials"("userId");

-- AddForeignKey
ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
