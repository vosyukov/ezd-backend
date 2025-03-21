import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { TmaGuard, TmaPayload, TmaPayloadData } from './guards/tma.guard';
import { AuthService } from './services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('tma')
  @UseGuards(TmaGuard)
  public async authTma(@TmaPayload() payload: TmaPayloadData): Promise<{ jwt: string }> {
    return await this.authService.authTg(payload.user.id);
  }

  @Post('login')
  public async authLogin(@Body() dto: { email: string }): Promise<{ jwt: string }> {
    return await this.authService.authLogin(dto.email);
  }
}
