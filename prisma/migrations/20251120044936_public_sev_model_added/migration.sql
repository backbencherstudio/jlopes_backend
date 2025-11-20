/*
  Warnings:

  - You are about to drop the `PublicServPrivateWealth` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "PublicServPrivateWealth";

-- DropEnum
DROP TYPE "Sector";

-- CreateTable
CREATE TABLE "sectors" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "sectors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "publicServs" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "sector_id" TEXT NOT NULL,

    CONSTRAINT "publicServs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sectors_name_key" ON "sectors"("name");

-- CreateIndex
CREATE UNIQUE INDEX "publicServs_email_key" ON "publicServs"("email");

-- AddForeignKey
ALTER TABLE "publicServs" ADD CONSTRAINT "publicServs_sector_id_fkey" FOREIGN KEY ("sector_id") REFERENCES "sectors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
