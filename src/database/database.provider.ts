import * as mongoose from 'mongoose';

export const databaseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<typeof mongoose> =>
            await mongoose.connect('mongodb+srv://res:FCMVQZsbKWlRXfQv@cluster0-cyoyg.mongodb.net/reservation?retryWrites=true&w=majority',
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })
    },
];

