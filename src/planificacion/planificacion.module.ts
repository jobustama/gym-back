import { Module } from '@nestjs/common';
import { PlanificacionService } from './planificacion.service';
import { PlanificacionController } from './planificacion.controller';
import { PrismaService } from '../prisma/prisma.service';
import { IsUserExistsConstraint } from './dto/is-user-exists.decorator';

@Module({
  controllers: [PlanificacionController],
  providers: [PlanificacionService, PrismaService, IsUserExistsConstraint], // <-- Agregamos el validador aquí
})
export class PlanificacionModule {}
