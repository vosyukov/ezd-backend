import { Module } from '@nestjs/common';
import { DriverService } from './services/driver.service';
import { DriverController } from './driver.controller';
import { DriverRepository } from './repositories/driver.repository';
import { DriverEntity } from './entities/driver.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from '../company/company.module';

@Module({
  imports: [TypeOrmModule.forFeature([DriverEntity]), CompanyModule],
  controllers: [DriverController],
  providers: [DriverRepository, DriverService],
})
export class DriverModule {}
