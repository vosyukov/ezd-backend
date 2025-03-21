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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const company_repository_1 = require("../repositories/company.repository");
const dadata_service_1 = require("./dadata.service");
let CompanyService = class CompanyService {
    constructor(companyRepository, dadataService) {
        this.companyRepository = companyRepository;
        this.dadataService = dadataService;
    }
    async getCompany(options) {
        const company = await this.companyRepository.getCompany({
            id: options.id,
            userId: options.userId,
        });
        if (!company) {
            throw new common_1.NotFoundException(`Company with id ${options.id} not found.`);
        }
        return company;
    }
    async addCompany(options) {
        const companyInfo = await this.dadataService.getCompanyByInn(options.inn);
        return this.companyRepository.addCompany({
            inn: options.inn,
            name: companyInfo.name,
            type: companyInfo.type,
            userId: options.userId,
        });
    }
    async getCompanyList(userId) {
        return this.companyRepository.getCompanyList({
            userIds: [userId],
        });
    }
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [company_repository_1.CompanyRepository,
        dadata_service_1.DadataService])
], CompanyService);
//# sourceMappingURL=company.service.js.map