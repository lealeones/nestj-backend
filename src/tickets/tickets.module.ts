import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsResolver } from './tickets.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  providers: [TicketsResolver, TicketsService]
})
export class TicketsModule {}
