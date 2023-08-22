import { Test, TestingModule } from '@nestjs/testing';
import { ProjectFinalService } from './project-final.service';

describe('ProjectFinalService', () => {
  let service: ProjectFinalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectFinalService],
    }).compile();

    service = module.get<ProjectFinalService>(ProjectFinalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
