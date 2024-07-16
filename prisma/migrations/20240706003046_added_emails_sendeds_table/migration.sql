-- CreateTable
CREATE TABLE "emails_sended" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "emails_sended_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "emails_sended_id_key" ON "emails_sended"("id");

-- AddForeignKey
ALTER TABLE "emails_sended" ADD CONSTRAINT "emails_sended_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
