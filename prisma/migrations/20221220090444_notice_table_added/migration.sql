-- CreateEnum
CREATE TYPE "NoticeTypes" AS ENUM ('CIRCULAR', 'NOTICES', 'WARNING', 'NOTIFICATION', 'PROMOTION');

-- CreateTable
CREATE TABLE "Notice" (
    "id" TEXT NOT NULL,
    "noticetypes" "NoticeTypes" NOT NULL,
    "description" TEXT NOT NULL,
    "created_by_id" TEXT NOT NULL,
    "updated_by_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Notice_pkey" PRIMARY KEY ("id")
);
