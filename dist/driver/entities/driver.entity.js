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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverEntity = exports.DriverStatus = void 0;
const typeorm_1 = require("typeorm");
const company_entity_1 = require("../../company/entities/company.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const TABLE_NAME = 'driver';
var DriverStatus;
(function (DriverStatus) {
    DriverStatus[DriverStatus["HIRED"] = 1] = "HIRED";
    DriverStatus[DriverStatus["FIRED"] = 2] = "FIRED";
})(DriverStatus || (exports.DriverStatus = DriverStatus = {}));
let DriverEntity = class DriverEntity {
};
exports.DriverEntity = DriverEntity;
DriverEntity.tableName = TABLE_NAME;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DriverEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DriverEntity.prototype, "inn", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DriverEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DriverEntity.prototype, "surname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint' }),
    __metadata("design:type", Number)
], DriverEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], DriverEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], DriverEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => company_entity_1.CompanyEntity, (company) => company.drivers),
    __metadata("design:type", Array)
], DriverEntity.prototype, "companies", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.UserEntity, (user) => user.drivers),
    __metadata("design:type", Array)
], DriverEntity.prototype, "users", void 0);
exports.DriverEntity = DriverEntity = __decorate([
    (0, typeorm_1.Entity)(TABLE_NAME)
], DriverEntity);
//# sourceMappingURL=driver.entity.js.map