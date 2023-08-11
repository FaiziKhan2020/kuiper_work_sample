-- CreateEnum
CREATE TYPE "PricingPlan" AS ENUM ('TRIAL', 'NONPROFIT', 'STANDARD', 'PREMIUM', 'ENTERPRISE');

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logoUrl" TEXT,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "primary_contact" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "plan" "PricingPlan" NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profile_image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
