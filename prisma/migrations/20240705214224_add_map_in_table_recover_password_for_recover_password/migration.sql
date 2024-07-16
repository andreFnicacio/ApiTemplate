/*
  Warnings:

  - You are about to drop the `RecoverPassword` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "RecoverPassword";

-- CreateTable
CREATE TABLE "recoverPassowrd" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expirationAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recoverPassowrd_pkey" PRIMARY KEY ("id")
);
