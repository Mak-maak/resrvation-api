import { Module } from '@nestjs/common';

import { GuestsModule } from './modules/guests.module';
import { UsersModule } from './modules/users.module';
import { ReservationModule } from './modules/reservations.module';
import { CarsModule } from './modules/cars.module';

@Module({
    imports: [
        CarsModule,
        GuestsModule,
        UsersModule,
        ReservationModule
    ]
})

export class EntitiesModule { }