import { Module } from '@nestjs/common';
import { ProjectFinalService } from './project-final.service';
import { ProjectFinalResolver } from './project-final.resolver';

@Module({
  providers: [ProjectFinalResolver, ProjectFinalService]
})
export class ProjectFinalModule {}
