import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Software } from './softwares/software.entity';
import { SoftwareCategories } from './software_categories/software_category.entity';

@Module({

  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [User, Software, SoftwareCategories],
    synchronize: true,
    dropSchema: false, //Awas
  }),
    DashboardModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
