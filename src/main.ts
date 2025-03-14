import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //Quando true, ele remove as chaves que não estão no DTO, se eu passar alguma propriedade a mais, ele remove antes de inserir
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
