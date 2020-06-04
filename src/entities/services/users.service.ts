import { Inject, Injectable, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { UsersDto, ResetPasswordDto } from './../dtos/users.dto';
import { Users } from './../interfaces/users.interface';

@Injectable()
export class UsersService {
    constructor(@Inject('USERS_MODEL') private readonly usersModel: Model<Users>) { }

    async create(usersDto: UsersDto): Promise<any> {
        const createUsers = new this.usersModel(usersDto);
        const result = await createUsers.save();
        return { status: 201, response: "Created.", emailAddress: result.email, message: "User registered successfully." };
    }
    
    async findAll(): Promise<Users[]> {
        return await this.usersModel.find().exec();
    }

    async find(id: string): Promise<Users> {
        return await this.usersModel.findById(id);
    }

    async findByEmail(email: string): Promise<Users> {
        return await this.usersModel.findOne({ email });
    }
    
    async update(id: string, usersDto: UsersDto): Promise<Users> {
        return await this.usersModel.findByIdAndUpdate(id, usersDto);
    }
    
    async resetPassword(email: string, pass: string): Promise<any> {
        const user = await this.findByEmail(email); 
        let userDto = new UsersDto();
        userDto.email = email;
        userDto.password = pass;
        await this.usersModel.findByIdAndUpdate(user.id, userDto);
        return { code: HttpStatus.OK , status: "Ok", message:"Password reset successfully." };
    }
    
    async delete(id: string): Promise<Users> {
        return await this.usersModel.findByIdAndRemove(id);
    }
}