-- CreateEnum
CREATE TYPE "DnsType" AS ENUM ('CNAME', 'TXT');

-- CreateTable
CREATE TABLE "Dns" (
    "id" TEXT NOT NULL,
    "domainId" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "type" "DnsType" NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dns_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dns_id_key" ON "Dns"("id");

-- AddForeignKey
ALTER TABLE "Dns" ADD CONSTRAINT "Dns_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "domain"("id") ON DELETE CASCADE ON UPDATE CASCADE;
