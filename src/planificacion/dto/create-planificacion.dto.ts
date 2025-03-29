import { IsString, IsUUID, IsDateString, IsOptional } from 'class-validator';
import { IsUserExists } from './is-user-exists.decorator';

export class CreatePlanificacionDto {
  @IsUUID()
  @IsUserExists({ message: 'El profesorId proporcionado no existe en la base de datos.' })
  profesorId: string;

  @IsUUID()
  @IsUserExists({ message: 'El alumnoId proporcionado no existe en la base de datos.' })
  alumnoId: string;

  @IsString()
  archivo: string;

  @IsString()
  formatoArchivo: string;

  @IsDateString()
  fechaEjecucion: string;

  @IsOptional()
  @IsString()
  nota?: string;
}
