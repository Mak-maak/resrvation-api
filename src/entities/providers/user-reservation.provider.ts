import { Connection } from 'mongoose';
import { UserReservationSchema } from './../schemas/user-reservations.schema';

export const userReservationProvider = [
    {
        provide: 'USER_RESERVATION_MODEL',
        useFactory: (connection: Connection) => connection.model('user-reservation', UserReservationSchema),
        inject: ['DATABASE_CONNECTION']
    },
];
    