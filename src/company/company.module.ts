import { Module } from '@nestjs/common';
import { CompanyService } from './services/company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from './entities/company.entity';
import { CompanyController } from './company.controller';
import { CompanyRepository } from './repositories/company.repository';
import { HttpModule } from '@nestjs/axios';
import { DadataBridge } from './services/dadata.bridge';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity]), HttpModule],
  providers: [CompanyService, CompanyRepository, DadataBridge],
  controllers: [CompanyController],
  exports: [CompanyRepository],
})
export class CompanyModule {}
