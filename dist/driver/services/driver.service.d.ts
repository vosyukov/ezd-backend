import { DriverRepository } from '../repositories/driver.repository';
import { DriverEntity } from '../entities/driver.entity';
import { CompanyRepository } from '../../company/repositories/company.repository';
export interface AddDriverOptions {
    inn: string;
    name: string;
    surname: string;
    companyId: string;
    userId: string;
}
export declare class DriverService {
    private readonly driverRepository;
    private readonly companyRepository;
    constructor(driverRepository: DriverRepository, companyRepository: CompanyRepository);
    getDriver(userId: string, driverId: string): Promise<DriverEntity>;
    getDriverList(userId: string): Promise<DriverEntity[]>;
    addDriver(options: AddDriverOptions): Promise<void>;
}
