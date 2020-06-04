import { Connection } from 'mongoose';
import { ReservationSchema } from './../schemas/reservations.schema';

export const reservationProvider = [
    {
        provide: 'RESERVATION_MODEL',
        useFactory: (connection: Connection) => connection.model('reservation', ReservationSchema),
        inject: ['DATABASE_CONNECTION']
    },
];