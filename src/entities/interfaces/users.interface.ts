import { Document } from 'mongoose';

export interface Users extends Document {
    readonly id: string;
    readonly email: string;
    readonly password: string;
    readonly isActive: boolean;
    
}