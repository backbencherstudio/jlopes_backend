/*
  Warnings:

  - You are about to drop the `team` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "team";

-- CreateTable
CREATE TABLE "teams" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "avatar" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stateCategories" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "advisor_id" TEXT NOT NULL,

    CONSTRAINT "stateCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "advisors" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "advisors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "advisors_email_key" ON "advisors"("email");

-- AddForeignKey
ALTER TABLE "stateCategories" ADD CONSTRAINT "stateCategories_advisor_id_fkey" FOREIGN KEY ("advisor_id") REFERENCES "advisors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
