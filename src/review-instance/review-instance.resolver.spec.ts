import { Test, TestingModule } from '@nestjs/testing';
import { ReviewInstanceResolver } from './review-instance.resolver';
import { ReviewInstanceService } from './review-instance.service';

describe('ReviewInstanceResolver', () => {
  let resolver: ReviewInstanceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReviewInstanceResolver, ReviewInstanceService],
    }).compile();

    resolver = module.get<ReviewInstanceResolver>(ReviewInstanceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
