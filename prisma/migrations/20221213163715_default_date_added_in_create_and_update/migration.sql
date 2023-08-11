-- CreateTable
CREATE TABLE "Campus" (
    "id" UUID NOT NULL,
    "company_id" TEXT NOT NULL,
    "campus_name" TEXT NOT NULL,
    "campus_imgurl" TEXT,
    "campus_phone" TEXT[],
    "campus_headid" TEXT NOT NULL,
    "campus_code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_active" BOOLEAN NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,

    CONSTRAINT "Campus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Campus" ADD CONSTRAINT "Campus_fk" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
