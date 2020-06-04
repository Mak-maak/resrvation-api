import { Document } from 'mongoose';
import { Cars } from './cars.interface';

export interface Reservation extends Document {
    
    readonly car: Cars;
    readonly serviceType: string;
    readonly pickUpDate: string;
    readonly pickUpTime: string;
    readonly pickUpLocation: string;
    readonly stops:
    [
        { readonly stopname: string }
    ];
    readonly dropOffLocation: string;
    readonly noOfPassengers: number;
    readonly luggageCount: number;
    readonly childern:
    [
        { child: String },
        { count: Number }
    ];
    readonly handicapAccess: boolean;
}