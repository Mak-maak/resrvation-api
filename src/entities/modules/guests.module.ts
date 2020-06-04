import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { guestsProvider } from './../providers/guests.provider';
import { GuestsService } from './../services/guests.service';
import { GuestsController } from './../controllers/guests.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [GuestsController],
    providers: [GuestsService, ...guestsProvider]
})

export class GuestsModule { }