import { Test, TestingModule } from '@nestjs/testing';
import { BiodiversityService } from './biodiversity.service';

describe('BiodiversityService', () => {
  let service: BiodiversityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiodiversityService],
    }).compile();

    service = module.get<BiodiversityService>(BiodiversityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
