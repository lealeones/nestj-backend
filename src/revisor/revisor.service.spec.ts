import { Test, TestingModule } from '@nestjs/testing';
import { RevisorService } from './revisor.service';

describe('RevisorService', () => {
  let service: RevisorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RevisorService],
    }).compile();

    service = module.get<RevisorService>(RevisorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
