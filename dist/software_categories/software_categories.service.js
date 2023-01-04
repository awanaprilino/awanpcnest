"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareCategoriesService = void 0;
const common_1 = require("@nestjs/common");
const software_category_entity_1 = require("./software_category.entity");
let SoftwareCategoriesService = class SoftwareCategoriesService {
    async findAll() {
        const result = software_category_entity_1.SoftwareCategories.find();
        return result;
    }
};
SoftwareCategoriesService = __decorate([
    (0, common_1.Injectable)()
], SoftwareCategoriesService);
exports.SoftwareCategoriesService = SoftwareCategoriesService;
//# sourceMappingURL=software_categories.service.js.map