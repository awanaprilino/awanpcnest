"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwaresService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const software_entity_1 = require("./software.entity");
let SoftwaresService = class SoftwaresService {
    async findAll(query) {
        const take = query.take || 10;
        const skip = query.skip || 0;
        const keyword = query.keyword || '';
        const [result, total] = await software_entity_1.Software.findAndCount({
            order: { updated_at: "DESC" },
            where: { name: (0, typeorm_1.Like)('%' + keyword + '%') },
            take: take,
            skip: skip
        });
        const from = 1 + Number(skip);
        const to = Math.min(Number(skip) + Number(take), total);
        const next = Number(skip) + Number(take);
        const previous = Number(skip) - Number(take);
        return {
            data: result,
            from: from,
            to: to,
            next: (total < next ? 0 : next),
            previous: previous,
            count: total
        };
    }
};
SoftwaresService = __decorate([
    (0, common_1.Injectable)()
], SoftwaresService);
exports.SoftwaresService = SoftwaresService;
//# sourceMappingURL=softwares.service.js.map