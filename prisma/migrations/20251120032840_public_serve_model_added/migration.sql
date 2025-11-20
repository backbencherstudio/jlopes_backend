-- CreateEnum
CREATE TYPE "Sector" AS ENUM ('TEACHER', 'NURSE', 'HEALTHCARE_WORKER', 'SMALL_BUSINESS_OWNER');

-- AlterTable
ALTER TABLE "testimonials" ALTER COLUMN "bio" DROP NOT NULL,
ALTER COLUMN "footer_title" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL;

-- CreateTable
CREATE TABLE "PublicServPrivateWealth" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "sector" "Sector" NOT NULL,

    CONSTRAINT "PublicServPrivateWealth_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PublicServPrivateWealth_email_key" ON "PublicServPrivateWealth"("email");
