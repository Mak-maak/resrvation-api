import { UserReservationDto } from './../dtos/user-reservation.dto';
import { Controller, Post, Get, Body, Param, UseGuards, Patch, Delete } from '@nestjs/common';
import { ReservationService } from './../services/reservations.service';
import { Reservation } from './../interfaces/reservations.interface';
import { ReservationDto } from './../dtos/reservations.dto';

@Controller('reservation')
export class ReservationController {
    constructor(private readonly reservationService: ReservationService) { }


    @Post('/create')
    async create(@Body() reservationdto: ReservationDto) {
        return this.reservationService.create(reservationdto);
    }

    @Post('/user-reservation')
    async createUserReservation(@Body() userReservationDto: UserReservationDto) {
        return this.reservationService.createUserReservation(userReservationDto);
    }

    @Get('/list')
    async findAll(): Promise<Reservation[]> {
        return this.reservationService.findAll();
    }

    @Get('/:id/:email')
    async find(@Param('id') id: string, @Param('email') email: string) {
        const reservation = await this.reservationService.find(id, email);
        if(reservation) {
            return reservation;
        }
        return { statusCode: 404, response: "Not Found.", message: "Reservation not found." };
    }    

    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() reservationDto: ReservationDto) {
        return await this.reservationService.update(id, reservationDto);
    }

    @Delete('/delete/:id')
    async delete(@Param('id') id: string) {
        return await this.reservationService.delete(id);
    }
}