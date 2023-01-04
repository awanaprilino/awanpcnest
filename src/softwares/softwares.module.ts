import { Module } from '@nestjs/common';
import { SoftwaresService } from './softwares.service';
import { SoftwaresController } from './softwares.controller';

@Module({
  providers: [SoftwaresService],
  controllers: [SoftwaresController]
})
export class SoftwaresModule {}
