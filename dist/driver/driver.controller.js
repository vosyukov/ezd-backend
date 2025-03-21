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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverController = void 0;
const common_1 = require("@nestjs/common");
const driver_service_1 = require("./services/driver.service");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const add_driver_dto_1 = require("./dto/add-driver.dto");
let DriverController = class DriverController {
    constructor(driverService) {
        this.driverService = driverService;
    }
    async addDriver(dto, payload) {
        await this.driverService.addDriver({
            inn: dto.inn,
            name: dto.name,
            companyId: dto.companyId,
            surname: dto.surname,
            userId: payload.userId,
        });
    }
    async getDriverList(payload) {
        return this.driverService.getDriverList(payload.userId);
    }
    async getDriver(dto, payload) {
        return this.driverService.getDriver(payload.userId, dto.driverId);
    }
};
exports.DriverController = DriverController;
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Post)('driver.add'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, jwt_guard_1.JwtPayload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_driver_dto_1.AddDriverDto, Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], DriverController.prototype, "addDriver", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Post)('driver.getList'),
    __param(0, (0, jwt_guard_1.JwtPayload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], DriverController.prototype, "getDriverList", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Post)('driver.get'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, jwt_guard_1.JwtPayload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], DriverController.prototype, "getDriver", null);
exports.DriverController = DriverController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [driver_service_1.DriverService])
], DriverController);
//# sourceMappingURL=driver.controller.js.map