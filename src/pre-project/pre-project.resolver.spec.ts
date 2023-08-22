import { Test, TestingModule } from '@nestjs/testing';
import { PreProjectResolver } from './pre-project.resolver';
import { PreProjectService } from './pre-project.service';

describe('PreProjectResolver', () => {
  let resolver: PreProjectResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreProjectResolver, PreProjectService],
    }).compile();

    resolver = module.get<PreProjectResolver>(PreProjectResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
