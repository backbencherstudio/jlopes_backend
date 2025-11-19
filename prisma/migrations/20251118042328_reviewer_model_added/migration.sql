/*
  Warnings:

  - You are about to drop the column `bio` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `testimonial_id` on the `users` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `testimonials` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_testimonial_id_fkey";

-- AlterTable
ALTER TABLE "testimonials" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "bio",
DROP COLUMN "testimonial_id",
ALTER COLUMN "avatar" DROP NOT NULL,
ALTER COLUMN "avatar" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "reviewers" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "avatar" TEXT[],
    "bio" TEXT NOT NULL,
    "testimonial_id" TEXT NOT NULL,

    CONSTRAINT "reviewers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reviewers" ADD CONSTRAINT "reviewers_testimonial_id_fkey" FOREIGN KEY ("testimonial_id") REFERENCES "testimonials"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
