import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';


@Injectable()
export class DashboardService {
    constructor(private readonly http: HttpService){}

    async checkCaptcha(token): Promise<any> {
        const response = await this.http.post(`https://www.google.com/recaptcha/api/siteverify?response=${token}&secret=${process.env.RECAPTCHA_SECRET}`).toPromise();
        return response.data;
    }
    
}
