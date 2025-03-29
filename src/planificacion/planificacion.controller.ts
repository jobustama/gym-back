import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { PlanificacionService } from './planificacion.service';
import { CreatePlanificacionDto } from './dto/create-planificacion.dto';

@Controller('planificaciones')
export class PlanificacionController {
  constructor(private readonly planificacionService: PlanificacionService) {}

  @Post()
  async create(@Body() createPlanificacionDto: CreatePlanificacionDto) {
    return this.planificacionService.create(createPlanificacionDto);
  }

  @Get()
  async findAll() {
    return this.planificacionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.planificacionService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePlanificacionDto) {
    return this.planificacionService.update(id, updatePlanificacionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.planificacionService.remove(id);
  }
}
