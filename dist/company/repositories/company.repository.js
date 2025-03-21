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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const company_entity_1 = require("../entities/company.entity");
const typeorm_2 = require("@nestjs/typeorm");
let CompanyRepository = class CompanyRepository {
    constructor(repository) {
        this.repository = repository;
    }
    async getCompany(filter) {
        let findOptions = {};
        if (filter.id) {
            findOptions = { ...findOptions, id: filter.id };
        }
        if (filter.userId) {
            findOptions = { ...findOptions, users: { id: filter.userId } };
        }
        return this.repository.findOne({ where: findOptions });
    }
    async addCompany(options) {
        return this.repository.save({
            inn: options.inn,
            name: options.name,
            type: options.type,
            users: [{ id: options.userId }],
        });
    }
    async getCompanyList(filter) {
        let findOptionsWhere = {};
        if (filter.userIds?.length) {
            findOptionsWhere = {
                ...findOptionsWhere,
                users: { id: (0, typeorm_1.In)(filter.userIds) },
            };
        }
        if (filter.companyIds?.length) {
            findOptionsWhere = { ...findOptionsWhere, id: (0, typeorm_1.In)(filter.companyIds) };
        }
        return this.repository.find({
            where: findOptionsWhere,
        });
    }
};
exports.CompanyRepository = CompanyRepository;
exports.CompanyRepository = CompanyRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(company_entity_1.CompanyEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], CompanyRepository);
//# sourceMappingURL=company.repository.js.map