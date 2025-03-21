import { Injectable } from '@nestjs/common';
import { DriverEntity, DriverStatus } from '../entities/driver.entity';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';

export interface AddDriverOptions {
  inn: string;
  name: string;
  surname: string;
  companyId: string;
  status: DriverStatus;
}

@Injectable()
export class DriverRepository {
  constructor(
    @InjectRepository(DriverEntity)
    private readonly repository: Repository<DriverEntity>,
  ) {}

  public async addDriver(options: AddDriverOptions): Promise<DriverEntity> {
    return this.repository.save({
      inn: options.inn,
      status: options.status,
      name: options.name,
      surname: options.surname,
      companies: [{ id: options.companyId }],
    });
  }

  public async getDriverList(filter: { companyIds: string[] }): Promise<DriverEntity[]> {
    let findOptionsWhere: FindOptionsWhere<DriverEntity> = {};

    if (filter.companyIds?.length) {
      findOptionsWhere = {
        ...findOptionsWhere,
        companies: { id: In(filter.companyIds) },
      };
    }

    return this.repository.find({ where: findOptionsWhere });
  }

  public async getDriver(filter: { companyId?: string; id?: string; userId?: string }): Promise<DriverEntity | null> {
    const findOptionsWhere: FindOptionsWhere<DriverEntity> = {};

    // if (filter.companyId) {
    //   findOptionsWhere = {
    //     ...findOptionsWhere,
    //     companies: { id: filter.companyId },
    //   };
    // }

    // if (filter.id) {
    //   findOptionsWhere = {
    //     ...findOptionsWhere,
    //     id: filter.id,
    //   };
    // }

    // if (filter.userId) {
    //   findOptionsWhere = {
    //     ...findOptionsWhere,
    //     users: { id: filter.userId },
    //   };
    // }

    return this.repository.findOne({ where: findOptionsWhere, relations: { companies: true } });
  }
}
