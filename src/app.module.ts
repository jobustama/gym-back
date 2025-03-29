import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PlanificacionModule } from './planificacion/planificacion.module';

@Module({
  imports: [PrismaModule, AuthModule, PlanificacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
