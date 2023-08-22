import { Module } from '@nestjs/common';
import { RevisorService } from './revisor.service';
import { RevisorResolver } from './revisor.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [RevisorResolver, RevisorService]
})
export class RevisorModule {}
