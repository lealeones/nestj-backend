import { Module } from '@nestjs/common';
import { AlumnoService } from './alumno.service';
import { AlumnoResolver } from './alumno.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AlumnoResolver, AlumnoService]
})
export class AlumnoModule {}
