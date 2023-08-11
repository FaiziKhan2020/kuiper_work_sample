-- CreateTable
CREATE TABLE "Literature" (
    "id" TEXT NOT NULL,
    "literature_name" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "literature_type" TEXT NOT NULL,
    "literature_description" TEXT,
    "created_by" TEXT NOT NULL,
    "literature_language" TEXT NOT NULL,
    "created_on" DATE NOT NULL,
    "updated_by" TEXT,
    "updated_on" DATE,
    "deleted_at" DATE,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "literature_url" TEXT NOT NULL,

    CONSTRAINT "Literature_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Literature" ADD CONSTRAINT "Literature_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
