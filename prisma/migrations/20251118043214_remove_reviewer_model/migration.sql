/*
  Warnings:

  - You are about to drop the `reviewers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bio` to the `testimonials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `testimonials` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "reviewers" DROP CONSTRAINT "reviewers_testimonial_id_fkey";

-- AlterTable
ALTER TABLE "testimonials" ADD COLUMN     "avatar" TEXT[],
ADD COLUMN     "bio" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- DropTable
DROP TABLE "reviewers";
