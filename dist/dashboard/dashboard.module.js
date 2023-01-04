"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../auth/auth.module");
const auth_service_1 = require("../auth/auth.service");
const softwares_module_1 = require("../softwares/softwares.module");
const softwares_service_1 = require("../softwares/softwares.service");
const software_categories_module_1 = require("../software_categories/software_categories.module");
const software_categories_service_1 = require("../software_categories/software_categories.service");
const users_module_1 = require("../users/users.module");
const users_service_1 = require("../users/users.service");
const dashboard_controller_1 = require("./dashboard.controller");
const dashboard_service_1 = require("./dashboard.service");
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            softwares_module_1.SoftwaresModule,
            software_categories_module_1.SoftwareCategoriesModule
        ],
        controllers: [dashboard_controller_1.DashboardController],
        providers: [dashboard_service_1.DashboardService, users_service_1.UsersService, auth_service_1.AuthService, softwares_service_1.SoftwaresService, software_categories_service_1.SoftwareCategoriesService],
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map