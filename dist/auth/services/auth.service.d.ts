import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../../user/repositories/user.repository';
export declare class AuthService {
    private jwtService;
    private userRepository;
    constructor(jwtService: JwtService, userRepository: UserRepository);
    authTg(tgId: number): Promise<{
        jwt: string;
    }>;
    authLogin(email: string): Promise<{
        jwt: string;
    }>;
}
