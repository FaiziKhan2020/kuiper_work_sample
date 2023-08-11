/*
  Warnings:

  - You are about to drop the column `address` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `contact` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `religion` on the `Employee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "address",
DROP COLUMN "contact",
DROP COLUMN "gender",
DROP COLUMN "religion";
