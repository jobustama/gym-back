import { Controller, Get, Param, Patch, Body } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // Obtener alumnos asignados a un profesor
  @Get('teacher/:teacherId')
  getStudentsByTeacher(@Param('teacherId') teacherId: string) {
    return this.studentService.getStudentsByTeacher(teacherId);
  }

  // Asignar un profesor a un alumno
  @Patch('assign')
  assignTeacher(@Body() body: { studentId: string; teacherId: string }) {
    return this.studentService.assignTeacher(body.studentId, body.teacherId);
  }

  // Obtener información de un alumno
  @Get(':id')
  getStudentById(@Param('id') studentId: string) {
    return this.studentService.getStudentById(studentId);
  }
}
