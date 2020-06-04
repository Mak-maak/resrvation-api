import { Document } from 'mongoose';

export interface UserReservation extends Document {
    readonly id: string;
    readonly email: string;
    readonly destination: string;
}