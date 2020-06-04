import { Connection } from 'mongoose';
import { GuestsSchema } from './../schemas/guests.schema';

export const guestsProvider = [
    {
        provide: 'GUESTS_MODEL',
        useFactory: (connection: Connection) => connection.model('guests', GuestsSchema),
        inject: ['DATABASE_CONNECTION']
    },
];