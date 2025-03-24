import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { DriverService } from './services/driver.service';
import { JwtGuard, JwtPayload } from '../auth/guards/jwt.guard';
import { AddDriverDto } from './dto/add-driver.dto';
import { DriverEntity } from './entities/driver.entity';

@Controller()
export class DriverController {
  constructor(private driverService: DriverService) {}

  @UseGuards(JwtGuard)
  @Post('driver.add')
  public async addDriver(@Body() dto: AddDriverDto, @JwtPayload() payload: JwtPayload): Promise<{ id: string }> {
    const driver = await this.driverService.addDriver({
      inn: dto.inn,
      name: dto.name,
      companyId: dto.companyId,
      surname: dto.surname,
      userId: payload.userId,
    });

    return { id: driver.id };
  }

  @UseGuards(JwtGuard)
  @Post('driver.getList')
  public async getDriverList(@JwtPayload() payload: JwtPayload): Promise<DriverEntity[]> {
    return this.driverService.getDriverList(payload.userId);
  }

  @UseGuards(JwtGuard)
  @Post('driver.get')
  public async getDriver(@Body() dto: { driverId: string }, @JwtPayload() payload: JwtPayload): Promise<DriverEntity> {
    return this.driverService.getDriver(payload.userId, dto.driverId);
  }
}
