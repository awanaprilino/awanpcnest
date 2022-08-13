import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('dashboard')
export class DashboardController {
    @Get()
    dashboard(): string {
        return 'This action returns dashboard'
    }

    @Get('software')
    software(): string {
        return 'This action return software list'
    }

    @Get('login')
    login(): string {
        return 'This action return login page'
    }
}
