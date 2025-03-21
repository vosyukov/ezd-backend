import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { CompanyEntity, CompanyType } from '../entities/company.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';

@Injectable()
export class CompanyRepository {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly repository: Repository<CompanyEntity>,
  ) {}

  public async getCompany(filter: { id?: string; userId?: string }): Promise<CompanyEntity | null> {
    let findOptions: FindOptionsWhere<CompanyEntity> = {};

    if (filter.id) {
      findOptions = { ...findOptions, id: filter.id };
    }

    if (filter.userId) {
      findOptions = { ...findOptions, users: { id: filter.userId } };
    }

    return this.repository.findOne({ where: findOptions });
  }

  public async addCompany(options: { inn: string; name: string; userId: string; type: CompanyType }): Promise<CompanyEntity> {
    return this.repository.save({
      inn: options.inn,
      name: options.name,
      type: options.type,
      users: [{ id: options.userId }],
    });
  }

  public async getCompanyList(filter: { userIds?: string[]; companyIds?: string[] }): Promise<CompanyEntity[]> {
    let findOptionsWhere: FindOptionsWhere<CompanyEntity> = {};

    if (filter.userIds?.length) {
      findOptionsWhere = {
        ...findOptionsWhere,
        users: { id: In(filter.userIds) },
      };
    }

    if (filter.companyIds?.length) {
      findOptionsWhere = { ...findOptionsWhere, id: In(filter.companyIds) };
    }

    return this.repository.find({
      where: findOptionsWhere,
    });
  }
}
