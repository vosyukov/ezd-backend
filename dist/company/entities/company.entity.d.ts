import { UserEntity } from '../../user/entities/user.entity';
import { DriverEntity } from '../../driver/entities/driver.entity';
export declare enum CompanyType {
    LEGAL = "LEGAL",
    INDIVIDUAL = "INDIVIDUAL"
}
export declare class CompanyEntity {
    id: string;
    inn: string;
    name: string;
    type: CompanyType;
    users: UserEntity[];
    drivers: DriverEntity[];
}
