import { CompanyRepository } from '../repositories/company.repository';
import { CompanyEntity } from '../entities/company.entity';
import { DadataService } from './dadata.service';
export declare class CompanyService {
    private readonly companyRepository;
    private readonly dadataService;
    constructor(companyRepository: CompanyRepository, dadataService: DadataService);
    getCompany(options: {
        id: string;
        userId: string;
    }): Promise<CompanyEntity>;
    addCompany(options: {
        inn: string;
        userId: string;
    }): Promise<CompanyEntity>;
    getCompanyList(userId: string): Promise<CompanyEntity[]>;
}
