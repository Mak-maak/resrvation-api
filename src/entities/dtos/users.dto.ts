import { IsEmail, IsString, IsBoolean, MinLength } from 'class-validator';

export class UsersDto {
   @IsEmail() email: string;
   @IsString() @MinLength(8) password: string;
   readonly isActive: boolean;
}

export class ResetPasswordDto {
   @IsEmail() readonly email: string;
   @IsString() @MinLength(8) oldPassword: string;
   @IsString() @MinLength(8) newPassword: string;
}