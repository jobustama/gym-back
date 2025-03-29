import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlanificacionDto } from './dto/create-planificacion.dto';

@Injectable()
export class PlanificacionService {
  constructor(private prisma: PrismaService) {}

  async create(createPlanificacionDto: CreatePlanificacionDto) {
    return await this.prisma.planificacion.create({
      data: createPlanificacionDto,
    });
  }

  async findAll() {
    return await this.prisma.planificacion.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.planificacion.findUnique({
      where: { id },
    });
  }

  async update(id: string, data) {
    return await this.prisma.planificacion.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return await this.prisma.planificacion.delete({
      where: { id },
    });
  }
}
