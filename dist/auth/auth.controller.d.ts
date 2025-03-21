import { TmaPayloadData } from './guards/tma.guard';
import { AuthService } from './services/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    authTma(payload: TmaPayloadData): Promise<{
        jwt: string;
    }>;
    authLogin(dto: {
        email: string;
    }): Promise<{
        jwt: string;
    }>;
}
