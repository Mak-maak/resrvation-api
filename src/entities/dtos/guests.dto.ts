import { IsEmail, IsString, Length } from 'class-validator';

export class GuestsDto {

    @IsString() @Length(3,50) readonly firstName: string;
    @IsString() @Length(3,50) readonly lastName: string;
    @IsString() @Length(10, 15) readonly phoneNumb: string;
    @IsEmail() readonly email: string;
}