import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { StudentService  } from './student.service';
import { StudentController } from './student.controller';

@Module({
  providers: [PrismaService, StudentService],
  controllers: [StudentController],
})
export class EstudiantesModule {}
