import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { SoftwaresModule } from 'src/softwares/softwares.module';
import { SoftwaresService } from 'src/softwares/softwares.service';
import { SoftwareCategoriesModule } from 'src/software_categories/software_categories.module';
import { SoftwareCategoriesService } from 'src/software_categories/software_categories.service';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

@Module({
  imports: [
    HttpModule, 
    UsersModule,
    AuthModule,
    SoftwaresModule,
    SoftwareCategoriesModule
  ],
  controllers: [DashboardController],
  providers: [DashboardService, UsersService, AuthService, SoftwaresService, SoftwareCategoriesService],
})
export class DashboardModule {}
