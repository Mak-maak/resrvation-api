import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './../entities/controllers/auth.controller';
import { usersProvider } from 'src/entities/providers/users.provider';
import { DatabaseModule } from './../database/database.module';
import { UsersService } from './../entities/services/users.service';

@Module({
    imports: [DatabaseModule],
    controllers: [AuthController],
    providers: [AuthService, UsersService, ...usersProvider]
})
export class AuthModule { }