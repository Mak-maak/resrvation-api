import { Controller, Post, Get, Body, Param, Patch, Delete, } from '@nestjs/common';
import { UsersDto, ResetPasswordDto } from './../dtos/users.dto';
import { AuthService } from './../../auth/auth.service';

@Controller('auth')
export class AuthController{
    constructor(private readonly authService: AuthService){}

    @Post('/register')
    async register(@Body() usersDto: UsersDto) {
        return this.authService.register(usersDto);
    }

    @Post('/login')
    async login(@Body() usersDto: UsersDto) {
        return this.authService.login(usersDto.email, usersDto.password);
    }

    @Patch('/reset-password')
    async resetPassword(@Body() resetPassDto: ResetPasswordDto){
      return this.resetPassword(resetPassDto);
    }
}