-- CreateTable
CREATE TABLE "Income" (
    "id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    "campus_id" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "created_by_id" TEXT NOT NULL,
    "updated_by_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Income_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Income_id_company_id_campus_id_created_by_id_created_at_idx" ON "Income"("id", "company_id", "campus_id", "created_by_id", "created_at");

-- AddForeignKey
ALTER TABLE "Income" ADD CONSTRAINT "Income_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Income" ADD CONSTRAINT "Income_campus_id_fkey" FOREIGN KEY ("campus_id") REFERENCES "Campus"("id") ON DELETE CASCADE ON UPDATE CASCADE;
