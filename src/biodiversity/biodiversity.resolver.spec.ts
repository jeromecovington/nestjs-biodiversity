import { Test, TestingModule } from '@nestjs/testing';
import { BiodiversityResolver } from './biodiversity.resolver';
import { BiodiversityService } from './biodiversity.service';

describe('BiodiversityResolver', () => {
  let resolver: BiodiversityResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiodiversityResolver, BiodiversityService],
    }).compile();

    resolver = module.get<BiodiversityResolver>(BiodiversityResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
