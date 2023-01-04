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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterDto = void 0;
const class_validator_1 = require("class-validator");
const match_decorator_1 = require("./match.decorator");
class RegisterDto {
    constructor() {
        this.privilege = '2';
    }
}
__decorate([
    (0, class_validator_1.IsEmail)({ message: "Email is Required" }),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Name is Required" }),
    __metadata("design:type", String)
], RegisterDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.MinLength)(6, { message: "Password must be 6 characters." }),
    (0, class_validator_1.MaxLength)(20, { message: "Password must be less than 20." }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, match_decorator_1.Match)('password', { message: "Password confirmation invalid" }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password_confirmation", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Token is Required." }),
    __metadata("design:type", String)
], RegisterDto.prototype, "token", void 0);
exports.RegisterDto = RegisterDto;
//# sourceMappingURL=register.dto.js.map