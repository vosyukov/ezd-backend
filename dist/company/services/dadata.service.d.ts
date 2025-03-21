import { HttpService } from '@nestjs/axios';
import { CompanyType } from '../entities/company.entity';
export declare class DadataService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getCompanyByInn(inn: string): Promise<{
        name: string;
        type: CompanyType;
    }>;
}
