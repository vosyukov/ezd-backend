import { UserService } from '../user/services/user.service';
export declare class RegisterController {
    private readonly userService;
    constructor(userService: UserService);
    reg(dto: {
        email: string;
    }): Promise<any>;
}
