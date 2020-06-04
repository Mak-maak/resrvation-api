import { Module } from '@nestjs/common';
import { Mailer } from './../../email/mailer';
import { DatabaseModule } from './../../database/database.module';

import { usersProvider } from './../providers/users.provider';
import { UsersService } from './../services/users.service';
import { UsersController } from './../controllers/users.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [UsersService, ...usersProvider, Mailer]
})

export class UsersModule { }