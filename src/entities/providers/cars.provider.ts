import { Connection } from 'mongoose';
import { CarsSchema } from './../schemas/cars.schema';

export const carsProvider = [
    {
        provide: 'CARS_MODEL',
        useFactory: (connection: Connection) => connection.model('cars', CarsSchema),
        inject: ['DATABASE_CONNECTION']
    },
];
    