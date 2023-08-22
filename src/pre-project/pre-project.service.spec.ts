import { Test, TestingModule } from '@nestjs/testing';
import { PreProjectService } from './pre-project.service';

describe('PreProjectService', () => {
  let service: PreProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreProjectService],
    }).compile();

    service = module.get<PreProjectService>(PreProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
