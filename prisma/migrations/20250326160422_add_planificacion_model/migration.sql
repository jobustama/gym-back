-- CreateTable
CREATE TABLE "Planificacion" (
    "id" TEXT NOT NULL,
    "profesorId" TEXT NOT NULL,
    "alumnoId" TEXT NOT NULL,
    "archivo" TEXT NOT NULL,
    "formatoArchivo" TEXT NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaEjecucion" TIMESTAMP(3) NOT NULL,
    "nota" TEXT,
    "estado" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Planificacion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Planificacion" ADD CONSTRAINT "Planificacion_profesorId_fkey" FOREIGN KEY ("profesorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Planificacion" ADD CONSTRAINT "Planificacion_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
