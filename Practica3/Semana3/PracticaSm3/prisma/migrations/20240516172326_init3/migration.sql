-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "correo" TEXT,
    "nombre" TEXT,
    "clave" TEXT,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);
