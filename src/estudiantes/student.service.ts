import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private readonly prisma: PrismaService) {}

  // Obtener todos los alumnos asignados a un profesor
  async getStudentsByTeacher(teacherId: string) {
    return this.prisma.student.findMany({
      where: { teacherId },
      include: { user: true }, // Para obtener la información del usuario
    });
  }

  // Asignar un profesor a un alumno
  async assignTeacher(studentId: string, teacherId: string) {
    const student = await this.prisma.student.findUnique({ where: { id: studentId } });
    const teacher = await this.prisma.user.findUnique({ where: { id: teacherId, role: 'TEACHER' } });

    if (!student) throw new NotFoundException('Estudiante no encontrado');
    if (!teacher) throw new NotFoundException('Profesor no encontrado');

    return this.prisma.student.update({
      where: { id: studentId },
      data: { teacherId },
    });
  }

  // Obtener un alumno por ID
  async getStudentById(studentId: string) {
    const student = await this.prisma.student.findUnique({
      where: { id: studentId },
      include: { user: true, teacher: true },
    });

    if (!student) throw new NotFoundException('Estudiante no encontrado');

    return student;
  }
}
