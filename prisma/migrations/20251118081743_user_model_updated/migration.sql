/*
  Warnings:

  - You are about to drop the column `avatar` on the `testimonials` table. All the data in the column will be lost.
  - You are about to drop the column `bio` on the `testimonials` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `testimonials` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `testimonials` table. All the data in the column will be lost.
  - The `avatar` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `testimonial_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "testimonials" DROP CONSTRAINT "testimonials_user_id_fkey";

-- AlterTable
ALTER TABLE "testimonials" DROP COLUMN "avatar",
DROP COLUMN "bio",
DROP COLUMN "name",
DROP COLUMN "user_id";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "testimonial_id" TEXT NOT NULL,
DROP COLUMN "avatar",
ADD COLUMN     "avatar" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_testimonial_id_fkey" FOREIGN KEY ("testimonial_id") REFERENCES "testimonials"("id") ON DELETE CASCADE ON UPDATE CASCADE;
