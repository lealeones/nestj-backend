import { Test, TestingModule } from '@nestjs/testing';
import { ProjectFinalResolver } from './project-final.resolver';
import { ProjectFinalService } from './project-final.service';

describe('ProjectFinalResolver', () => {
  let resolver: ProjectFinalResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectFinalResolver, ProjectFinalService],
    }).compile();

    resolver = module.get<ProjectFinalResolver>(ProjectFinalResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
