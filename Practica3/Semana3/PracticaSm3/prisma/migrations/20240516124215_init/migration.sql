-- CreateTable
CREATE TABLE "computadora2" (
    "ID" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "detallesTecnicos" TEXT NOT NULL,
    "costoPorHoraPrestamo" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "computadora2_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "prestamista2" (
    "ID" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "identificacion" TEXT NOT NULL,

    CONSTRAINT "prestamista2_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "prestamo2" (
    "ID" SERIAL NOT NULL,
    "IDcomputadora" INTEGER NOT NULL,
    "IDprestamista" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "hora" TEXT NOT NULL,
    "numeroHorasPrestamo" INTEGER NOT NULL,

    CONSTRAINT "prestamo2_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "prestamista2_identificacion_key" ON "prestamista2"("identificacion");

-- AddForeignKey
ALTER TABLE "prestamo2" ADD CONSTRAINT "prestamo2_IDcomputadora_fkey" FOREIGN KEY ("IDcomputadora") REFERENCES "computadora2"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prestamo2" ADD CONSTRAINT "prestamo2_IDprestamista_fkey" FOREIGN KEY ("IDprestamista") REFERENCES "prestamista2"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
