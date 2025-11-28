/*
  Warnings:

  - You are about to drop the column `profession_id` on the `contactUs` table. All the data in the column will be lost.
  - Added the required column `sector_id` to the `contactUs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "contactUs" DROP CONSTRAINT "contactUs_profession_id_fkey";

-- AlterTable
ALTER TABLE "contactUs" DROP COLUMN "profession_id",
ADD COLUMN     "sector_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "contactUs" ADD CONSTRAINT "contactUs_sector_id_fkey" FOREIGN KEY ("sector_id") REFERENCES "sectors"("id") ON DELETE CASCADE ON UPDATE CASCADE;
