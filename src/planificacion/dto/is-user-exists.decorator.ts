import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsUserExistsConstraint implements ValidatorConstraintInterface {
  constructor(private readonly prisma: PrismaService) {}

  async validate(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    return !!user; // Retorna `true` si el usuario existe, `false` si no existe.
  }

  defaultMessage(args: ValidationArguments) {
    return `El usuario con ID "${args.value}" no existe.`;
  }
}

// Decorador reutilizable
export function IsUserExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUserExistsConstraint,
    });
  };
}
