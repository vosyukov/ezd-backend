import { JwtPayload } from '../auth/guards/jwt.guard';
import { CompanyService } from './services/company.service';
import { CompanyEntity } from './entities/company.entity';
export declare class CompanyController {
    private companyService;
    constructor(companyService: CompanyService);
    getCompany(dto: {
        id: string;
    }, payload: JwtPayload): Promise<CompanyEntity>;
    addCompany(dto: {
        inn: string;
    }, payload: JwtPayload): Promise<any>;
    getCompanyList(payload: JwtPayload): Promise<CompanyEntity[]>;
}
