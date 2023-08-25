import { Module } from '@nestjs/common';
import { TripsService } from './trips.service';
import { TripsResolver } from './trips.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TripsResolver, TripsService]
})
export class TripsModule {}
