import { DriverEntity, DriverStatus } from '../entities/driver.entity';
import { Repository } from 'typeorm';
export interface AddDriverOptions {
    inn: string;
    name: string;
    surname: string;
    companyId: string;
    status: DriverStatus;
}
export declare class DriverRepository {
    private readonly repository;
    constructor(repository: Repository<DriverEntity>);
    addDriver(options: AddDriverOptions): Promise<DriverEntity>;
    getDriverList(filter: {
        companyIds: string[];
    }): Promise<DriverEntity[]>;
    getDriver(filter: {
        companyId?: string;
        id?: string;
        userId?: string;
    }): Promise<DriverEntity | null>;
}
