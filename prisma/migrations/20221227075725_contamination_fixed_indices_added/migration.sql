/*
  Warnings:

  - You are about to drop the column `campus_headid` on the `Campus` table. All the data in the column will be lost.
  - You are about to drop the column `course_id` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `owner_id` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `created_on` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_by` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `updated_by` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `created_on` on the `Literature` table. All the data in the column will be lost.
  - You are about to drop the column `updated_by` on the `Literature` table. All the data in the column will be lost.
  - You are about to drop the column `updated_on` on the `Literature` table. All the data in the column will be lost.
  - You are about to drop the column `classId` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `employeeId` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `endTime` on the `TeacherCampus` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `TeacherCampus` table. All the data in the column will be lost.
  - You are about to drop the column `subject_name` on the `TeacherSubject` table. All the data in the column will be lost.
  - You are about to drop the `Courses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NotificationEntity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notification` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `campus_id` to the `Alumni` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `Alumni` table without a default value. This is not possible if the table is not empty.
  - Made the column `student_id` on table `Alumni` required. This step will fail if there are existing NULL values in that column.
  - Made the column `graduation_date` on table `Alumni` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `company_id` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `Batch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `EmailLog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `Enrollment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted_at` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Made the column `updated_at` on table `Event` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `company_id` to the `Expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `Fees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `Literature` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `Notice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `Parents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `StudentPromotion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `TeacherPromotion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Alumni" DROP CONSTRAINT "Alumni_student_id_fkey";

-- DropForeignKey
ALTER TABLE "Campus" DROP CONSTRAINT "Campus_fk";

-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_course_id_fkey";

-- DropForeignKey
ALTER TABLE "Courses" DROP CONSTRAINT "Courses_campus_id_fkey";

-- DropForeignKey
ALTER TABLE "Enrollment" DROP CONSTRAINT "Enrollment_course_id_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_campus_id_fkey";

-- DropForeignKey
ALTER TABLE "Fees" DROP CONSTRAINT "Fees_student_id_fkey";

-- DropForeignKey
ALTER TABLE "Literature" DROP CONSTRAINT "Literature_course_id_fkey";

-- DropForeignKey
ALTER TABLE "NotificationEntity" DROP CONSTRAINT "NotificationEntity_notification_id_fkey";

-- DropForeignKey
ALTER TABLE "Teacher" DROP CONSTRAINT "Teacher_classId_fkey";

-- DropForeignKey
ALTER TABLE "Teacher" DROP CONSTRAINT "Teacher_employeeId_fkey";

-- AlterTable
ALTER TABLE "Alumni" ADD COLUMN     "campus_id" TEXT NOT NULL,
ADD COLUMN     "company_id" TEXT NOT NULL,
ALTER COLUMN "student_id" SET NOT NULL,
ALTER COLUMN "graduation_date" SET NOT NULL,
ALTER COLUMN "graduation_date" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Assignment" ADD COLUMN     "company_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "AssignmentGroup" ALTER COLUMN "deleted_at" DROP NOT NULL,
ALTER COLUMN "deleted_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Batch" ADD COLUMN     "campus_id" TEXT,
ADD COLUMN     "centeral" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "company_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Campus" DROP COLUMN "campus_headid",
ALTER COLUMN "campus_phone" SET NOT NULL,
ALTER COLUMN "campus_phone" SET DATA TYPE TEXT,
ALTER COLUMN "campus_code" DROP NOT NULL,
ALTER COLUMN "is_active" SET DEFAULT true,
ALTER COLUMN "is_deleted" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "course_id";

-- AlterTable
ALTER TABLE "ClassSchedule" ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "owner_id";

-- AlterTable
ALTER TABLE "EmailLog" ADD COLUMN     "company_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "company_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Enrollment" ADD COLUMN     "company_id" TEXT NOT NULL,
ADD COLUMN     "delted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "created_on",
DROP COLUMN "deleted_by",
DROP COLUMN "updated_by",
ADD COLUMN     "company_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "event_date" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "updated_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Expenses" ADD COLUMN     "company_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Fees" ADD COLUMN     "company_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Literature" DROP COLUMN "created_on",
DROP COLUMN "updated_by",
DROP COLUMN "updated_on",
ADD COLUMN     "company_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "deleted_at" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Notice" ADD COLUMN     "company_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Parents" ADD COLUMN     "company_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "enrollment_date" DROP DEFAULT;

-- AlterTable
ALTER TABLE "StudentPromotion" ADD COLUMN     "company_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "company_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "classId",
DROP COLUMN "employeeId",
ADD COLUMN     "class_id" TEXT,
ADD COLUMN     "employee_id" TEXT;

-- AlterTable
ALTER TABLE "TeacherCampus" DROP COLUMN "endTime",
DROP COLUMN "startTime",
ADD COLUMN     "end_time" TIMESTAMP(3),
ADD COLUMN     "start_time" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "TeacherPromotion" ADD COLUMN     "company_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TeacherSubject" DROP COLUMN "subject_name";

-- AlterTable
ALTER TABLE "Test" ADD COLUMN     "company_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "company_id" TEXT NOT NULL,
ALTER COLUMN "active" SET DEFAULT false;

-- DropTable
DROP TABLE "Courses";

-- DropTable
DROP TABLE "NotificationEntity";

-- DropTable
DROP TABLE "notification";

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    "seen" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT NOT NULL,
    "from_id" TEXT,
    "type" TEXT NOT NULL DEFAULT 'System',
    "priority" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "course_name" TEXT NOT NULL,
    "course_edition" TEXT,
    "campus_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassCourse" (
    "id" TEXT NOT NULL,
    "class_id" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ClassCourse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Notification_id_company_id_user_id_from_id_idx" ON "Notification"("id", "company_id", "user_id", "from_id");

-- CreateIndex
CREATE INDEX "Course_id_campus_id_idx" ON "Course"("id", "campus_id");

-- CreateIndex
CREATE INDEX "ClassCourse_id_class_id_course_id_idx" ON "ClassCourse"("id", "class_id", "course_id");

-- CreateIndex
CREATE INDEX "Alumni_id_company_id_campus_id_student_id_idx" ON "Alumni"("id", "company_id", "campus_id", "student_id");

-- CreateIndex
CREATE INDEX "Assignment_id_company_id_teacher_id_idx" ON "Assignment"("id", "company_id", "teacher_id");

-- CreateIndex
CREATE INDEX "AssignmentGroup_id_assignment_id_class_id_student_id_idx" ON "AssignmentGroup"("id", "assignment_id", "class_id", "student_id");

-- CreateIndex
CREATE INDEX "Batch_id_company_id_campus_id_idx" ON "Batch"("id", "company_id", "campus_id");

-- CreateIndex
CREATE INDEX "Billing_id_user_id_company_id_billing_expire_last_payment_s_idx" ON "Billing"("id", "user_id", "company_id", "billing_expire", "last_payment_status");

-- CreateIndex
CREATE INDEX "Campus_id_company_id_idx" ON "Campus"("id", "company_id");

-- CreateIndex
CREATE INDEX "Class_id_campus_id_idx" ON "Class"("id", "campus_id");

-- CreateIndex
CREATE INDEX "ClassSchedule_id_class_id_subject_id_idx" ON "ClassSchedule"("id", "class_id", "subject_id");

-- CreateIndex
CREATE INDEX "Company_id_idx" ON "Company"("id");

-- CreateIndex
CREATE INDEX "Department_id_campus_id_head_of_department_idx" ON "Department"("id", "campus_id", "head_of_department");

-- CreateIndex
CREATE INDEX "EmailLog_id_company_id_status_email_type_idx" ON "EmailLog"("id", "company_id", "status", "email_type");

-- CreateIndex
CREATE INDEX "Employee_id_company_id_campus_id_email_idx" ON "Employee"("id", "company_id", "campus_id", "email");

-- CreateIndex
CREATE INDEX "EmployeeAttendance_id_campus_id_employee_id_attendance_stat_idx" ON "EmployeeAttendance"("id", "campus_id", "employee_id", "attendance_status", "time_stamp", "created_at");

-- CreateIndex
CREATE INDEX "Enrollment_id_company_id_enrollment_number_student_id_idx" ON "Enrollment"("id", "company_id", "enrollment_number", "student_id");

-- CreateIndex
CREATE INDEX "Event_id_campus_id_company_id_event_name_event_date_idx" ON "Event"("id", "campus_id", "company_id", "event_name", "event_date");

-- CreateIndex
CREATE INDEX "Examination_id_campus_id_idx" ON "Examination"("id", "campus_id");

-- CreateIndex
CREATE INDEX "Expenses_id_company_id_created_by_id_created_at_idx" ON "Expenses"("id", "company_id", "created_by_id", "created_at");

-- CreateIndex
CREATE INDEX "Fees_id_company_id_student_id_due_date_is_paid_idx" ON "Fees"("id", "company_id", "student_id", "due_date", "is_paid");

-- CreateIndex
CREATE INDEX "Invoice_id_billing_id_invoice_number_due_date_status_idx" ON "Invoice"("id", "billing_id", "invoice_number", "due_date", "status");

-- CreateIndex
CREATE INDEX "Literature_id_company_id_course_id_idx" ON "Literature"("id", "company_id", "course_id");

-- CreateIndex
CREATE INDEX "Log_id_user_id_company_id_entity_type_idx" ON "Log"("id", "user_id", "company_id", "entity_type");

-- CreateIndex
CREATE INDEX "Notice_id_company_id_created_by_id_idx" ON "Notice"("id", "company_id", "created_by_id");

-- CreateIndex
CREATE INDEX "Parents_id_company_id_email_idx" ON "Parents"("id", "company_id", "email");

-- CreateIndex
CREATE INDEX "Payroll_id_campus_id_employee_id_invoice_number_payroll_dat_idx" ON "Payroll"("id", "campus_id", "employee_id", "invoice_number", "payroll_date");

-- CreateIndex
CREATE INDEX "PayrollItems_id_payroll_id_idx" ON "PayrollItems"("id", "payroll_id");

-- CreateIndex
CREATE INDEX "Question_id_exam_id_idx" ON "Question"("id", "exam_id");

-- CreateIndex
CREATE INDEX "Role_id_user_id_company_id_role_idx" ON "Role"("id", "user_id", "company_id", "role");

-- CreateIndex
CREATE INDEX "Student_id_parent_id_campus_id_class_id_batch_id_idx" ON "Student"("id", "parent_id", "campus_id", "class_id", "batch_id");

-- CreateIndex
CREATE INDEX "StudentAnswer_id_test_question_id_student_id_idx" ON "StudentAnswer"("id", "test_question_id", "student_id");

-- CreateIndex
CREATE INDEX "StudentAttendance_id_campus_id_student_id_teacher_id_time_s_idx" ON "StudentAttendance"("id", "campus_id", "student_id", "teacher_id", "time_stamp", "created_at");

-- CreateIndex
CREATE INDEX "StudentPromotion_id_company_id_student_id_idx" ON "StudentPromotion"("id", "company_id", "student_id");

-- CreateIndex
CREATE INDEX "Subject_id_company_id_idx" ON "Subject"("id", "company_id");

-- CreateIndex
CREATE INDEX "Teacher_id_employee_id_class_id_idx" ON "Teacher"("id", "employee_id", "class_id");

-- CreateIndex
CREATE INDEX "TeacherCampus_id_campus_id_teacher_id_idx" ON "TeacherCampus"("id", "campus_id", "teacher_id");

-- CreateIndex
CREATE INDEX "TeacherPromotion_id_company_id_teacher_id_promotion_date_idx" ON "TeacherPromotion"("id", "company_id", "teacher_id", "promotion_date");

-- CreateIndex
CREATE INDEX "TeacherSubject_id_subject_id_teacher_id_idx" ON "TeacherSubject"("id", "subject_id", "teacher_id");

-- CreateIndex
CREATE INDEX "Test_id_company_id_deadline_teacher_id_subject_id_idx" ON "Test"("id", "company_id", "deadline", "teacher_id", "subject_id");

-- CreateIndex
CREATE INDEX "TestGroup_id_test_id_class_id_submission_date_idx" ON "TestGroup"("id", "test_id", "class_id", "submission_date");

-- CreateIndex
CREATE INDEX "TestQuestion_id_test_id_idx" ON "TestQuestion"("id", "test_id");

-- CreateIndex
CREATE INDEX "TestQuestionOption_id_test_question_id_idx" ON "TestQuestionOption"("id", "test_question_id");

-- CreateIndex
CREATE INDEX "Transaction_id_company_id_entity_id_created_by_id_created_a_idx" ON "Transaction"("id", "company_id", "entity_id", "created_by_id", "created_at");

-- CreateIndex
CREATE INDEX "User_email_id_idx" ON "User"("email", "id");

-- AddForeignKey
ALTER TABLE "Campus" ADD CONSTRAINT "Campus_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parents" ADD CONSTRAINT "Parents_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alumni" ADD CONSTRAINT "Alumni_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alumni" ADD CONSTRAINT "Alumni_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alumni" ADD CONSTRAINT "Alumni_campus_id_fkey" FOREIGN KEY ("campus_id") REFERENCES "Campus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_campus_id_fkey" FOREIGN KEY ("campus_id") REFERENCES "Campus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassCourse" ADD CONSTRAINT "ClassCourse_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassCourse" ADD CONSTRAINT "ClassCourse_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expenses" ADD CONSTRAINT "Expenses_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notice" ADD CONSTRAINT "Notice_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailLog" ADD CONSTRAINT "EmailLog_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_campus_id_fkey" FOREIGN KEY ("campus_id") REFERENCES "Campus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherPromotion" ADD CONSTRAINT "TeacherPromotion_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentPromotion" ADD CONSTRAINT "StudentPromotion_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fees" ADD CONSTRAINT "Fees_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fees" ADD CONSTRAINT "Fees_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Literature" ADD CONSTRAINT "Literature_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Literature" ADD CONSTRAINT "Literature_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
