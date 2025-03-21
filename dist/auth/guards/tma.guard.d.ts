import { CanActivate, ExecutionContext } from '@nestjs/common';
export type TmaPayloadData = {
    auth_date: string;
    chat_type: string;
    chat_instance: string;
    hash: string;
    start_param: string;
    signature: string;
    user: {
        allows_write_to_pm: boolean;
        first_name: string;
        id: number;
        is_premium: boolean;
        last_name: string;
        language_code: string;
        username: string;
    };
};
export declare const TmaPayload: any;
export declare class TmaGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
    private extractTokenFromHeader;
}
