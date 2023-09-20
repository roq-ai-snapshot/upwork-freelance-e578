-- CreateTable
CREATE TABLE "agency" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "owner_id" UUID NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "agency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agency_member" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "agency_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "joined_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" VARCHAR(255) NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "agency_member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "description" VARCHAR(255),
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" UUID NOT NULL,
    "tenant_id" VARCHAR(255) NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "client_id" UUID NOT NULL,
    "freelancer_id" UUID NOT NULL,
    "start_date" TIMESTAMP(6),
    "end_date" TIMESTAMP(6),
    "status" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "support_ticket" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "subject" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "status" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "support_ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "email" VARCHAR(255) NOT NULL,
    "firstName" VARCHAR(255),
    "lastName" VARCHAR(255),
    "roq_user_id" VARCHAR(255) NOT NULL,
    "tenant_id" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "agency" ADD CONSTRAINT "agency_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "agency_member" ADD CONSTRAINT "agency_member_agency_id_fkey" FOREIGN KEY ("agency_id") REFERENCES "agency"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "agency_member" ADD CONSTRAINT "agency_member_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "company" ADD CONSTRAINT "company_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_freelancer_id_fkey" FOREIGN KEY ("freelancer_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "support_ticket" ADD CONSTRAINT "support_ticket_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

