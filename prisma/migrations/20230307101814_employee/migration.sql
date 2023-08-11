/*
  Warnings:

  - Added the required column `caste` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "caste" TEXT NOT NULL;
