-- CreateTable
CREATE TABLE "computadora" (
    "ID" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "detallesTecnicos" TEXT NOT NULL,
    "costoPorHoraPrestamo" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "computadora_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "prestamista" (
    "ID" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "identificacion" TEXT NOT NULL,

    CONSTRAINT "prestamista_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "prestamo" (
    "ID" SERIAL NOT NULL,
    "IDcomputadora" INTEGER NOT NULL,
    "IDprestamista" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "hora" TEXT NOT NULL,
    "numeroHorasPrestamo" INTEGER NOT NULL,

    CONSTRAINT "prestamo_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "prestamista_identificacion_key" ON "prestamista"("identificacion");

-- AddForeignKey
ALTER TABLE "prestamo" ADD CONSTRAINT "prestamo_IDcomputadora_fkey" FOREIGN KEY ("IDcomputadora") REFERENCES "computadora"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prestamo" ADD CONSTRAINT "prestamo_IDprestamista_fkey" FOREIGN KEY ("IDprestamista") REFERENCES "prestamista"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
