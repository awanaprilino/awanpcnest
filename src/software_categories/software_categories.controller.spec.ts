import { Test, TestingModule } from '@nestjs/testing';
import { SoftwareCategoriesController } from './software_categories.controller';

describe('SoftwareCategoriesController', () => {
  let controller: SoftwareCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoftwareCategoriesController],
    }).compile();

    controller = module.get<SoftwareCategoriesController>(SoftwareCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
