import * as helmet from 'helmet';
import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet());
  app.enableCors();
  app.setGlobalPrefix('/api/v1');

  const port = 80;
  await app.listen(port);
  console.log('Application is running on http://localhost:80/api/v1/');
}
bootstrap();
