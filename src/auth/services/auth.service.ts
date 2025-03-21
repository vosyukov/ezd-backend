import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../guards/jwt.guard';
import { UserRepository } from '../../user/repositories/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userRepository: UserRepository,
  ) {}

  public async authTg(tgId: number): Promise<{ jwt: string }> {
    const user = await this.userRepository.getUser({ tgId: tgId.toString() });

    if (!user) {
      throw new UnauthorizedException();
    }

    const payload: JwtPayload = { userId: user.id };

    const jwt = await this.jwtService.signAsync(payload, {
      expiresIn: Date.now(),
      secret: 'secret',
    });
    return { jwt };
  }

  public async authLogin(email: string): Promise<{ jwt: string }> {
    const user = await this.userRepository.getUser({ email: email });

    if (!user) {
      throw new UnauthorizedException();
    }

    const payload: JwtPayload = { userId: user.id };

    const jwt = await this.jwtService.signAsync(payload, {
      expiresIn: Date.now(),
      secret: 'secret',
    });
    return { jwt };
  }
}
