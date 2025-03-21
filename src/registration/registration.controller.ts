import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../user/services/user.service';

@Controller('reg')
export class RegisterController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  public async reg(@Body() dto: { email: string }): Promise<any> {
    await this.userService.createUser(dto.email);
  }
}
