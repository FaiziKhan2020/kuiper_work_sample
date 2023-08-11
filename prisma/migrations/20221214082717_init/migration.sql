/*
  Warnings:

  - The primary key for the `Campus` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Campus" DROP CONSTRAINT "Campus_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Campus_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "campus_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "relegion" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "father_name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "enrollment_date" TIMESTAMP(3) NOT NULL,
    "class" TEXT NOT NULL,
    "promotion_date" TIMESTAMP(3) NOT NULL,
    "section" TEXT NOT NULL,
    "roll_number" TEXT NOT NULL,
    "profile_picture" TEXT,
    "status" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_campus_id_fkey" FOREIGN KEY ("campus_id") REFERENCES "Campus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
