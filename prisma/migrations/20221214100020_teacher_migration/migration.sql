-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "date_of_birth" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "enrollment_date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "promotion_date" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Teacher" (
    "id" TEXT NOT NULL,
    "campus_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "caste" TEXT NOT NULL,
    "religion" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "hiring_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subject_specialist" TEXT[],
    "current_position" TEXT NOT NULL,
    "profile_picture" TEXT,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_campus_id_fkey" FOREIGN KEY ("campus_id") REFERENCES "Campus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
