import { Test, TestingModule } from '@nestjs/testing';
import { SoftwareCategoriesService } from './software_categories.service';

describe('SoftwareCategoriesService', () => {
  let service: SoftwareCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoftwareCategoriesService],
    }).compile();

    service = module.get<SoftwareCategoriesService>(SoftwareCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
