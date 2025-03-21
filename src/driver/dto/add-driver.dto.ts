import { DriverStatus } from '../entities/driver.entity';

export class AddDriverDto {
  public companyId: string;

  public name: string;

  public surname: string;

  public inn: string;
}
