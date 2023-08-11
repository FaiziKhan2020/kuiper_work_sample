-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "event_name" TEXT NOT NULL,
    "event_description" TEXT,
    "event_type" TEXT NOT NULL,
    "event_date" DATE NOT NULL,
    "created_by" TEXT NOT NULL,
    "created_on" DATE NOT NULL,
    "campus_id" TEXT NOT NULL,
    "updated_by" TEXT,
    "deleted_by" TEXT,
    "updated_at" DATE,
    "is_active" BOOLEAN NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_campus_id_fkey" FOREIGN KEY ("campus_id") REFERENCES "Campus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
