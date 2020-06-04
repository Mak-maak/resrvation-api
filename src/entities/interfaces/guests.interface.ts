import { Document } from 'mongoose';

export interface Guests extends Document {
    
    readonly firstName: string;
    readonly lastName: string;
    readonly phoneNumb: string;
    readonly email: string;
}