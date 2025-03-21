import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { CompanyModule } from './company/company.module';
import { CompanyEntity } from './company/entities/company.entity';
import { RegisterModule } from './registration/registration.module';
import { DriverModule } from './driver/driver.module';
import { DriverEntity } from './driver/entities/driver.entity';

@Module({
  imports: [
    DriverModule,
    RegisterModule,
    UserModule,
    CompanyModule,
    AuthModule,
    JwtModule.register({
      global: true,
      secret: 'jwtConstants.secret',
      signOptions: { expiresIn: '6000000s' },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [UserEntity, CompanyEntity, DriverEntity],
      logging: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
