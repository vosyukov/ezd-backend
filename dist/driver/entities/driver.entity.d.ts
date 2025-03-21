import { CompanyEntity } from '../../company/entities/company.entity';
import { UserEntity } from '../../user/entities/user.entity';
export declare enum DriverStatus {
    HIRED = 1,
    FIRED = 2
}
export declare class DriverEntity {
    static tableName: string;
    id: string;
    inn: string;
    name: string;
    surname: string;
    status: DriverStatus;
    createdAt: Date;
    updatedAt: Date;
    companies: CompanyEntity[];
    users: UserEntity[];
}
