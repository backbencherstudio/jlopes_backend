/*
  Warnings:

  - The `name` column on the `testimonials` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "testimonials" ALTER COLUMN "user_id" DROP NOT NULL,
DROP COLUMN "name",
ADD COLUMN     "name" TEXT[];
