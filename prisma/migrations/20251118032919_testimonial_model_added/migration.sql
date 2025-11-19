/*
  Warnings:

  - The `avatar` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `bio` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `testimonial_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "bio" TEXT NOT NULL,
ADD COLUMN     "testimonial_id" TEXT NOT NULL,
DROP COLUMN "avatar",
ADD COLUMN     "avatar" TEXT[];

-- CreateTable
CREATE TABLE "testimonials" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "howWeHelped" TEXT NOT NULL,
    "gapGuardian" TEXT[],
    "result" TEXT NOT NULL,

    CONSTRAINT "testimonials_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_testimonial_id_fkey" FOREIGN KEY ("testimonial_id") REFERENCES "testimonials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
