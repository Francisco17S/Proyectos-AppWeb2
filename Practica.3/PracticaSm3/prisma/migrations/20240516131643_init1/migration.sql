/*
  Warnings:

  - Added the required column `estado` to the `computadora2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `prestamista2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `prestamo2` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "computadora2" ADD COLUMN     "estado" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "prestamista2" ADD COLUMN     "estado" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "prestamo2" ADD COLUMN     "estado" TEXT NOT NULL;
