import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { RegisterController } from './registration.controller';

@Module({ imports: [UserModule], controllers: [RegisterController] })
export class RegisterModule {}
