import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtGuard, JwtPayload } from '../auth/guards/jwt.guard';
import { CompanyService } from './services/company.service';
import { CompanyEntity } from './entities/company.entity';

@Controller()
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @UseGuards(JwtGuard)
  @Post('company.get')
  public async getCompany(@Body() dto: { id: string }, @JwtPayload() payload: JwtPayload): Promise<CompanyEntity> {
    return this.companyService.getCompany({
      id: dto.id,
      userId: payload.userId,
    });
  }

  @UseGuards(JwtGuard)
  @Post('company.add')
  public async addCompany(@Body() dto: { inn: string }, @JwtPayload() payload: JwtPayload): Promise<any> {
    return this.companyService.addCompany({
      inn: dto.inn,
      userId: payload.userId,
    });
  }

  @UseGuards(JwtGuard)
  @Post('company.getList')
  public async getCompanyList(@JwtPayload() payload: JwtPayload): Promise<CompanyEntity[]> {
    const { userId } = payload;
    return this.companyService.getCompanyList(userId);
  }
}
