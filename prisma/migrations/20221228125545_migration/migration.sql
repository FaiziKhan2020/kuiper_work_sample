/*
  Warnings:

  - Added the required column `location` to the `Campus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Campus" ADD COLUMN     "location" TEXT NOT NULL;
