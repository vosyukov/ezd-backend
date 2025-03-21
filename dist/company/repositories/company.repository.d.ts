import { Repository } from 'typeorm';
import { CompanyEntity, CompanyType } from '../entities/company.entity';
export declare class CompanyRepository {
    private readonly repository;
    constructor(repository: Repository<CompanyEntity>);
    getCompany(filter: {
        id?: string;
        userId?: string;
    }): Promise<CompanyEntity | null>;
    addCompany(options: {
        inn: string;
        name: string;
        userId: string;
        type: CompanyType;
    }): Promise<CompanyEntity>;
    getCompanyList(filter: {
        userIds?: string[];
        companyIds?: string[];
    }): Promise<CompanyEntity[]>;
}
