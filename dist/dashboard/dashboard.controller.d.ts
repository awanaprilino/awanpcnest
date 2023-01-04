import { SoftwaresService } from 'src/softwares/softwares.service';
import { SoftwareCategoriesService } from 'src/software_categories/software_categories.service';
import { UsersService } from 'src/users/users.service';
import { DashboardService } from './dashboard.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class DashboardController {
    private dashboardService;
    private usersService;
    private softwareService;
    private softwareCategoriesService;
    constructor(dashboardService: DashboardService, usersService: UsersService, softwareService: SoftwaresService, softwareCategoriesService: SoftwareCategoriesService);
    getDashboard(req: any): {
        title: string;
        menu: string;
    };
    getSoftwareList(query: any): Promise<{
        title: string;
        menu: string;
        data: any;
    }>;
    addNewSoftware(query: any): Promise<{
        title: string;
        menu: string;
        categories: any;
    }>;
    getArticle(): {
        title: string;
        menu: string;
    };
    getLogin(res: any, req: any): {
        title: string;
        fullUrl: string;
    };
    postLogin(query: any, body: LoginDto): Promise<{
        status: boolean;
        message: string;
        redirect: any;
    }>;
    getRegister(): {
        title: string;
    };
    postRegister(body: RegisterDto, req: any): Promise<import("../users/user.entity").User>;
    logout(req: any, res: any): any;
}
