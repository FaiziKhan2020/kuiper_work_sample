-- CreateTable
CREATE TABLE "Fees" (
    "id" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "due_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_paid" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Fees_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Fees" ADD CONSTRAINT "Fees_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
