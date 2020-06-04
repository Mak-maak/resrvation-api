import { IsString, Length } from 'class-validator';

export class CarsDto {
   @IsString() @Length(5,100) readonly name: string;
   @IsString() @Length(5,50) readonly modelNumber: string;
   @IsString() @Length(3,50) readonly color: string;
   @IsString() readonly image: string;
}