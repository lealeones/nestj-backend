import { Test, TestingModule } from '@nestjs/testing';
import { ReviewInstanceService } from './review-instance.service';

describe('ReviewInstanceService', () => {
  let service: ReviewInstanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReviewInstanceService],
    }).compile();

    service = module.get<ReviewInstanceService>(ReviewInstanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
