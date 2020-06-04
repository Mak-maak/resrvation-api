import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { reservationProvider } from './../providers/reservations.provider';
import { ReservationController } from './../controllers/reservations.controller';
import { ReservationService } from './../services/reservations.service';
import { userReservationProvider } from '../providers/user-reservation.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [ReservationController],
    providers: [ReservationService, ...reservationProvider, ...userReservationProvider]
})

export class ReservationModule { }