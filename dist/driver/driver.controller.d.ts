import { DriverService } from './services/driver.service';
import { JwtPayload } from '../auth/guards/jwt.guard';
import { AddDriverDto } from './dto/add-driver.dto';
import { DriverEntity } from './entities/driver.entity';
export declare class DriverController {
    private driverService;
    constructor(driverService: DriverService);
    addDriver(dto: AddDriverDto, payload: JwtPayload): Promise<void>;
    getDriverList(payload: JwtPayload): Promise<DriverEntity[]>;
    getDriver(dto: {
        driverId: string;
    }, payload: JwtPayload): Promise<DriverEntity>;
}
