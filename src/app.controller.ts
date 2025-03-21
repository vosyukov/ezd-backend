import { Controller, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

import { JwtGuard } from './auth/guards/jwt.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('test')
  @UseGuards(JwtGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
