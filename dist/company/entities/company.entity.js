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
exports.CompanyEntity = exports.CompanyType = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../user/entities/user.entity");
const driver_entity_1 = require("../../driver/entities/driver.entity");
var CompanyType;
(function (CompanyType) {
    CompanyType["LEGAL"] = "LEGAL";
    CompanyType["INDIVIDUAL"] = "INDIVIDUAL";
})(CompanyType || (exports.CompanyType = CompanyType = {}));
let CompanyEntity = class CompanyEntity {
};
exports.CompanyEntity = CompanyEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CompanyEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "inn", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.UserEntity, (user) => user.companies),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => driver_entity_1.DriverEntity, (driver) => driver.companies),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "drivers", void 0);
exports.CompanyEntity = CompanyEntity = __decorate([
    (0, typeorm_1.Entity)()
], CompanyEntity);
//# sourceMappingURL=company.entity.js.map