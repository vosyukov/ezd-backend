import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      prefix: 'EZD',
      json: true,
    }),
  });
  app.enableCors();
  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
