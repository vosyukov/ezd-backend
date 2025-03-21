"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModule = void 0;
const common_1 = require("@nestjs/common");
const company_service_1 = require("./services/company.service");
const typeorm_1 = require("@nestjs/typeorm");
const company_entity_1 = require("./entities/company.entity");
const company_controller_1 = require("./company.controller");
const company_repository_1 = require("./repositories/company.repository");
const axios_1 = require("@nestjs/axios");
const dadata_service_1 = require("./services/dadata.service");
let CompanyModule = class CompanyModule {
};
exports.CompanyModule = CompanyModule;
exports.CompanyModule = CompanyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([company_entity_1.CompanyEntity]), axios_1.HttpModule],
        providers: [company_service_1.CompanyService, company_repository_1.CompanyRepository, dadata_service_1.DadataService],
        controllers: [company_controller_1.CompanyController],
        exports: [company_repository_1.CompanyRepository],
    })
], CompanyModule);
//# sourceMappingURL=company.module.js.map