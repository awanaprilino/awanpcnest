"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
const softwares_service_1 = require("../softwares/softwares.service");
const software_categories_service_1 = require("../software_categories/software_categories.service");
const users_service_1 = require("../users/users.service");
const dashboard_service_1 = require("./dashboard.service");
const login_dto_1 = require("./dto/login.dto");
const register_dto_1 = require("./dto/register.dto");
const authenticated_guard_1 = require("./guards/authenticated.guard");
const local_auth_guard_1 = require("./guards/local-auth.guard");
const redirect_1 = require("./guards/redirect");
let DashboardController = class DashboardController {
    constructor(dashboardService, usersService, softwareService, softwareCategoriesService) {
        this.dashboardService = dashboardService;
        this.usersService = usersService;
        this.softwareService = softwareService;
        this.softwareCategoriesService = softwareCategoriesService;
    }
    getDashboard(req) {
        return {
            title: 'Dashboard - Awanpc',
            menu: 'dashboard'
        };
    }
    async getSoftwareList(query) {
        return {
            title: 'Software List - Awanpc',
            menu: 'software',
            data: await this.softwareService.findAll(query)
        };
    }
    async addNewSoftware(query) {
        return {
            title: 'Add New - Awanpc',
            menu: 'software',
            categories: await this.softwareCategoriesService.findAll()
        };
    }
    getArticle() {
        return {
            title: 'Article List - Awanpc',
            menu: 'article',
        };
    }
    getLogin(res, req) {
        res.cookie('cookieName', 'cookieValue', { sameSite: 'none', secure: true });
        return {
            title: 'Login - Awanpc',
            fullUrl: req.protocol + '://' + req.get('host') + req.originalUrl
        };
    }
    async postLogin(query, body) {
        if (query.redirect) {
            return {
                status: true,
                message: "Berhasil Login",
                redirect: query.redirect
            };
        }
        return {
            status: true,
            message: "Berhasil Login",
            redirect: "/dashboard"
        };
    }
    getRegister() {
        return {
            title: 'Register - Awanpc',
        };
    }
    async postRegister(body, req) {
        let validation = await this.dashboardService.checkCaptcha(req.body.token);
        if (validation.success) {
            try {
                return await this.usersService.register(body);
            }
            catch (error) {
                let message = [];
                if (error.errno == 1062) {
                    message.push('The Email Account Already Exists!');
                }
                else {
                    message.push('Oops, an error occurred');
                }
                throw new common_1.HttpException({
                    message: message
                }, common_1.HttpStatus.BAD_REQUEST);
            }
        }
        else {
            throw new common_1.BadRequestException();
        }
    }
    logout(req, res) {
        req.session.destroy();
        res.redirect('/dashboard/login');
    }
};
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.UseFilters)(redirect_1.ViewAuthFilter),
    (0, common_1.Get)(),
    (0, common_1.Render)('admin/dashboard.hbs'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('software'),
    (0, common_1.Render)('admin/software/index.hbs'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getSoftwareList", null);
__decorate([
    (0, common_1.Get)('software/add'),
    (0, common_1.Render)('admin/software/add.hbs'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "addNewSoftware", null);
__decorate([
    (0, common_1.Get)('article'),
    (0, common_1.Render)('admin/article/index.hbs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getArticle", null);
__decorate([
    (0, common_1.Get)('login'),
    (0, common_1.Render)('admin/auth/login.hbs'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getLogin", null);
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "postLogin", null);
__decorate([
    (0, common_1.Get)('register'),
    (0, common_1.Render)('admin/auth/register.hbs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getRegister", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto, Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "postRegister", null);
__decorate([
    (0, common_1.Get)('logout'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], DashboardController.prototype, "logout", null);
DashboardController = __decorate([
    (0, common_1.Controller)('dashboard'),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService,
        users_service_1.UsersService,
        softwares_service_1.SoftwaresService,
        software_categories_service_1.SoftwareCategoriesService])
], DashboardController);
exports.DashboardController = DashboardController;
//# sourceMappingURL=dashboard.controller.js.map