import { Injectable, HttpStatus } from '@nestjs/common';
import { UsersService } from './../entities/services/users.service';
import * as bcrypt from 'bcrypt';
import { UsersDto, ResetPasswordDto } from './../entities/dtos/users.dto';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) { }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        const status = await this.decryptPassword(pass, user.password); // true | false
        if (user && status) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async register(user: UsersDto) {
        const hashedPassword = await this.encryptPassword(user.password);
        user.password = hashedPassword;
        await this.usersService.create(user);
        return { code: HttpStatus.CREATED, status: "Created", message: "Registration successful" };
    }

    async login(email: string, pass: string) {
        const result = await this.validateUser(email, pass);
        if (result) {
            return { code: HttpStatus.OK, status: "Ok", message: "Login successful" };
        }
        return { code: HttpStatus.NOT_FOUND, status: "Not Found", message: "Email or Password is incorrect" };
    }

    async resetPassword(resetPassDto: ResetPasswordDto) {
        const user = await this.validateUser(resetPassDto.email, resetPassDto.oldPassword);
        if (user) {
            const hashedPassword = await this.encryptPassword(resetPassDto.newPassword);
            return await this.usersService.resetPassword(user.email, hashedPassword);
        }
        return { code: HttpStatus.NOT_FOUND, status: "Not Found", message: "Error. Email or Password is incorrect." };
    }

    async encryptPassword(plainTextPassword: string) {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(plainTextPassword, salt);
        return hash;
    }

    async decryptPassword(plainTextPassword: string, hash: string) {
        return bcrypt.compareSync(plainTextPassword, hash);
    }
}