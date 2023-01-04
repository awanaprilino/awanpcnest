import { Module } from '@nestjs/common';
import { SoftwareCategoriesController } from './software_categories.controller';
import { SoftwareCategoriesService } from './software_categories.service';

@Module({
  providers: [SoftwareCategoriesService],
  controllers: [SoftwareCategoriesController]
})
export class SoftwareCategoriesModule {}
