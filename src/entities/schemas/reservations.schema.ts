import * as mongoose from 'mongoose';
import { CarsSchema } from './cars.schema';

const ChildernSchema = new mongoose.Schema({
    child: { type: String, required: false },
    count: { type: String, required: false }
});

export const ReservationSchema = new mongoose.Schema({
    serviceType: { type: String, required: true },
    pickUpDate: { type: String, required: true },
    pickUpTime: { type: String, required: true },
    pickUpLocation: { type: String, required: true },
    stops: [{ stopname: String }],
    dropOffLocation: { type: String, required: true },
    noOfPassengers: { type: String, required: true },
    luggageCount: { type: String, required: true },
    childern: [ ChildernSchema ],
    handicapAccess: { type: Boolean, required: true },
    car: [ CarsSchema ]
});