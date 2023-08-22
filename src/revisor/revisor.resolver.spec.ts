import { Test, TestingModule } from '@nestjs/testing';
import { RevisorResolver } from './revisor.resolver';
import { RevisorService } from './revisor.service';

describe('RevisorResolver', () => {
  let resolver: RevisorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RevisorResolver, RevisorService],
    }).compile();

    resolver = module.get<RevisorResolver>(RevisorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
