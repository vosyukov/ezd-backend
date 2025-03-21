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
exports.DriverService = void 0;
const common_1 = require("@nestjs/common");
const driver_repository_1 = require("../repositories/driver.repository");
const driver_entity_1 = require("../entities/driver.entity");
const company_repository_1 = require("../../company/repositories/company.repository");
let DriverService = class DriverService {
    constructor(driverRepository, companyRepository) {
        this.driverRepository = driverRepository;
        this.companyRepository = companyRepository;
    }
    async getDriver(userId, driverId) {
        const driver = await this.driverRepository.getDriver({
            id: driverId,
            userId: userId,
        });
        if (!driver) {
            throw new common_1.NotFoundException('Driver does not exist');
        }
        return driver;
    }
    async getDriverList(userId) {
        const companies = await this.companyRepository.getCompanyList({
            userIds: [userId],
        });
        const drivers = await this.driverRepository.getDriverList({
            companyIds: companies.map((i) => i.id),
        });
        return drivers;
    }
    async addDriver(options) {
        const company = await this.companyRepository.getCompany({
            userId: options.userId,
            id: options.companyId,
        });
        if (!company) {
            throw new common_1.NotFoundException('Company not found.');
        }
        await this.driverRepository.addDriver({
            inn: options.inn,
            companyId: company.id,
            name: options.name,
            surname: options.surname,
            status: driver_entity_1.DriverStatus.HIRED,
        });
    }
};
exports.DriverService = DriverService;
exports.DriverService = DriverService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [driver_repository_1.DriverRepository,
        company_repository_1.CompanyRepository])
], DriverService);
//# sourceMappingURL=driver.service.js.map