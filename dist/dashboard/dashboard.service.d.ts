import { HttpService } from '@nestjs/axios';
export declare class DashboardService {
    private readonly http;
    constructor(http: HttpService);
    checkCaptcha(token: any): Promise<any>;
}
