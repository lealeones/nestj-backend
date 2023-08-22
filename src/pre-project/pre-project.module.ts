import { Module } from '@nestjs/common';
import { PreProjectService } from './pre-project.service';
import { PreProjectResolver } from './pre-project.resolver';

@Module({
  providers: [PreProjectResolver, PreProjectService]
})
export class PreProjectModule {}
