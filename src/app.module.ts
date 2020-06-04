import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EntitiesModule } from './entities/entities.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [EntitiesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
