import { Controller, Post, Patch, Get, Delete, Body, Param } from '@nestjs/common';
import { CarsService } from './../services/cars.service';
import { CarsDto } from './../dtos/cars.dto';
import { Cars } from './../interfaces/cars.interface';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) { }

    @Post('/create')
    async create(@Body() carsdto: CarsDto) {
        return this.carsService.create(carsdto);
    }
    @Get('/list')
    async findAll(): Promise<Cars[]> {
        return this.carsService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.carsService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() carsdto: CarsDto) {
        return this.carsService.update(id, carsdto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string) {
        return await this.carsService.delete(id);
    }
} 