import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { carsProvider } from './../providers/cars.provider';
import { CarsController } from './../controllers/cars.controller';
import { CarsService } from './../services/cars.service';

@Module({
    imports: [DatabaseModule],
    controllers: [CarsController],
    providers: [CarsService, ...carsProvider]
})

export class CarsModule { }