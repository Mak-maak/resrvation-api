import { Injectable,Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CarsDto } from './../dtos/cars.dto';
import { Cars } from './../interfaces/cars.interface';

@Injectable()
export class CarsService {
    constructor(@Inject('CARS_MODEL') private readonly carsModel: Model<Cars>){}

    async create(carsDto: CarsDto): Promise<Cars> {
        const createCars = new this.carsModel(carsDto);
        return await createCars.save();
    }
    async findAll(): Promise<Cars[]> {
        return await this.carsModel.find().exec();
    }
    async find(id: string): Promise<Cars> {
        return await this.carsModel.findById(id);
    }
    async update(id: string, carsDto: CarsDto): Promise<Cars> {
        return await this.carsModel.findByIdAndUpdate(id, carsDto);
    }
    async delete(id: string): Promise<Cars> {
        return await this.carsModel.findByIdAndRemove(id);
    }
}