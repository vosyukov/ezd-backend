import { Injectable, NotFoundException } from '@nestjs/common';
import { DriverRepository } from '../repositories/driver.repository';
import { DriverEntity, DriverStatus } from '../entities/driver.entity';
import { CompanyRepository } from '../../company/repositories/company.repository';

export interface AddDriverOptions {
  inn: string;
  name: string;
  surname: string;
  companyId: string;
  userId: string;
}

@Injectable()
export class DriverService {
  constructor(
    private readonly driverRepository: DriverRepository,
    private readonly companyRepository: CompanyRepository,
  ) {}

  public async getDriver(userId: string, driverId: string): Promise<DriverEntity> {
    const driver = await this.driverRepository.getDriver({
      id: driverId,
      userId: userId,
    });

    if (!driver) {
      throw new NotFoundException('Driver does not exist');
    }

    return driver;
  }

  public async getDriverList(userId: string): Promise<DriverEntity[]> {
    const companies = await this.companyRepository.getCompanyList({
      userIds: [userId],
    });

    const drivers = await this.driverRepository.getDriverList({
      companyIds: companies.map((i) => i.id),
    });

    return drivers;
  }

  // public fairDriver(options: { driverId: string; userId: string; feedback: string }): Promise<DriverEntity[]> {}

  public async addDriver(options: AddDriverOptions): Promise<void> {
    const company = await this.companyRepository.getCompany({
      userId: options.userId,
      id: options.companyId,
    });

    if (!company) {
      throw new NotFoundException('Company not found.');
    }

    await this.driverRepository.addDriver({
      inn: options.inn,
      companyId: company.id,
      name: options.name,
      surname: options.surname,
      status: DriverStatus.HIRED,
    });
  }
}
