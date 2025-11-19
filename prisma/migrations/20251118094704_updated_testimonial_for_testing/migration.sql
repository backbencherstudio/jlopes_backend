/*
  Warnings:

  - You are about to drop the column `userId` on the `testimonials` table. All the data in the column will be lost.
  - Added the required column `bio` to the `testimonials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `footer_title` to the `testimonials` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "testimonials" DROP CONSTRAINT "testimonials_userId_fkey";

-- DropIndex
DROP INDEX "testimonials_userId_key";

-- AlterTable
ALTER TABLE "testimonials" DROP COLUMN "userId",
ADD COLUMN     "bio" TEXT NOT NULL,
ADD COLUMN     "footer_title" TEXT NOT NULL,
ADD COLUMN     "image" TEXT[],
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "howWeHelped" DROP NOT NULL,
ALTER COLUMN "result" DROP NOT NULL;
