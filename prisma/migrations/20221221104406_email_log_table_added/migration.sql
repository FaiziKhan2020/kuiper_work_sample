/*
  Warnings:

  - You are about to drop the column `noticetypes` on the `Notice` table. All the data in the column will be lost.
  - Added the required column `notice_type` to the `Notice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parent_id` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Notice" DROP COLUMN "noticetypes",
ADD COLUMN     "notice_type" "NoticeTypes" NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "parent_id" TEXT NOT NULL,
ALTER COLUMN "date_of_birth" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Parents" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "is_guardian" BOOLEAN NOT NULL DEFAULT false,
    "profile_picture" TEXT,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Parents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailLog" (
    "id" TEXT NOT NULL,
    "sent_date" TIMESTAMP(3) NOT NULL,
    "email_type" TEXT NOT NULL,
    "status" "Statuses" NOT NULL,
    "payload" JSONB NOT NULL,
    "to_email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Parents"("id") ON DELETE CASCADE ON UPDATE CASCADE;
