import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CompanyRepository } from '../repositories/company.repository';
import { CompanyEntity } from '../entities/company.entity';
import { DadataBridge } from './dadata.bridge';
import { ErrorCode } from '../../commons/error-codes';

@Injectable()
export class CompanyService {
  constructor(
    private readonly companyRepository: CompanyRepository,
    private readonly dadataService: DadataBridge,
  ) {}

  public async getCompany(options: { id: string; userId: string }): Promise<CompanyEntity> {
    const company = await this.companyRepository.getCompany({
      id: options.id,
      userId: options.userId,
    });

    if (!company) {
      throw new NotFoundException(`Company with id ${options.id} not found.`);
    }

    return company;
  }

  public async addCompany(options: { inn: string; userId: string }): Promise<CompanyEntity> {
    const companyInfo = await this.dadataService.getCompanyByInn(options.inn);

    if (companyInfo === null) {
      throw new BadRequestException({ code: ErrorCode.COMPANY_NOT_FOUND });
    }

    return this.companyRepository.addCompany({
      inn: options.inn,
      name: companyInfo.name,
      type: companyInfo.type,
      userId: options.userId,
    });
  }

  public async getCompanyList(userId: string): Promise<CompanyEntity[]> {
    return this.companyRepository.getCompanyList({
      userIds: [userId],
    });
  }
}
