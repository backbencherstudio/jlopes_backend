/*
  Warnings:

  - You are about to drop the column `title` on the `testimonials` table. All the data in the column will be lost.
  - You are about to drop the column `bio` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "testimonials" DROP COLUMN "title",
ADD COLUMN     "name" TEXT[];

-- AlterTable
ALTER TABLE "users" DROP COLUMN "bio",
ALTER COLUMN "avatar" DROP NOT NULL,
ALTER COLUMN "avatar" DROP DEFAULT,
ALTER COLUMN "avatar" SET DATA TYPE TEXT;
