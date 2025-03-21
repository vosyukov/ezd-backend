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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DadataService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const DADATA_API_URL = 'http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party';
const token = 'e53ca5076d1e0f99eb85f90d3e4f28d3124d7a41';
let DadataService = class DadataService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getCompanyByInn(inn) {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(DADATA_API_URL, { query: inn, branch_type: 'MAIN', count: 1 }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
        }));
        if (data.suggestions.length === 0) {
            console.log(data.suggestions);
            throw new common_1.HttpException('', 400);
        }
        console.log(data.suggestions[0]);
        const val = data.suggestions[0];
        return { name: val.data.name.short_with_opf, type: val.data.type };
    }
};
exports.DadataService = DadataService;
exports.DadataService = DadataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object])
], DadataService);
//# sourceMappingURL=dadata.service.js.map