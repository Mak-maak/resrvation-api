import { Controller, Post, Get, Body, Param, Patch, Delete, } from '@nestjs/common';
import { UsersService } from './../services/users.service';
import { UsersDto } from './../dtos/users.dto';
import { EmailDto } from './../../email/email.dto';
import { Mailer } from './../../email/mailer';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService, private readonly mailer: Mailer) { }

    @Get('/list')
    async findAll() {
        return this.usersService.findAll();
    }

    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() usersDto: UsersDto) {
        return this.usersService.update(id, usersDto);
    }

    @Delete('/delete/:id')
    async delete(@Param('id') id: string) {
        return await this.usersService.delete(id);
    }

    @Post('/send-email')
    async sendEmail(@Body() emailDto: EmailDto) {
        return this.mailer.sendMail(emailDto);
    }
}