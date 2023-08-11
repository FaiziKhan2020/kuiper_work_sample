-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "subdomain" TEXT,
ALTER COLUMN "billing_expired" SET DEFAULT CURRENT_TIMESTAMP;
