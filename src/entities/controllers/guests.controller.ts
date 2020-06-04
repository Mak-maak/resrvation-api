import { Controller, Post, Get, Body, Param, Patch, Delete } from '@nestjs/common';
import { GuestsService } from './../services/guests.service';
import { GuestsDto } from './../dtos/guests.dto';
import { Guests } from './../interfaces/guests.interface';

@Controller('guests')
export class GuestsController {
    constructor(private readonly guestsService: GuestsService) { }

    @Post('/create')
    async create(@Body() guestsdto: GuestsDto) {
        return this.guestsService.create(guestsdto);
    }
    @Get('/list')
    async findAll(): Promise<Guests[]> {
        return this.guestsService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.guestsService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() guestsDto: GuestsDto) {
        return this.guestsService.update(id, guestsDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string) {
        return this.guestsService.delete(id);
    }
}