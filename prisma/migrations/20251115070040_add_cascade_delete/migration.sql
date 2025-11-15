-- DropForeignKey
ALTER TABLE "stateCategories" DROP CONSTRAINT "stateCategories_advisor_id_fkey";

-- AddForeignKey
ALTER TABLE "stateCategories" ADD CONSTRAINT "stateCategories_advisor_id_fkey" FOREIGN KEY ("advisor_id") REFERENCES "advisors"("id") ON DELETE CASCADE ON UPDATE CASCADE;
