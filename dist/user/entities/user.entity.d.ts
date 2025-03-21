import { CompanyEntity } from '../../company/entities/company.entity';
import { DriverEntity } from '../../driver/entities/driver.entity';
export declare class UserEntity {
    id: string;
    tgId: string | null;
    email: string | null;
    isActive: boolean;
    companies: CompanyEntity[];
    drivers: DriverEntity[];
}
