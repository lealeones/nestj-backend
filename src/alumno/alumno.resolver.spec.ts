import { Test, TestingModule } from '@nestjs/testing';
import { AlumnoResolver } from './alumno.resolver';
import { AlumnoService } from './alumno.service';

describe('AlumnoResolver', () => {
  let resolver: AlumnoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlumnoResolver, AlumnoService],
    }).compile();

    resolver = module.get<AlumnoResolver>(AlumnoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
