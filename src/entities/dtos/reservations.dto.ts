import { IsNumber, IsString, Min, Max, Length } from 'class-validator';
import { CarsDto } from './cars.dto';

class ChildernDto {
    readonly child: String;
    readonly count: Number;
}

export class ReservationDto {
    readonly car: CarsDto;
    readonly serviceType: string;
    readonly pickUpDate: string;
    readonly pickUpTime: string;
    readonly pickUpLocation: string;
    readonly stops: [{ readonly stopname: string }];
    readonly dropOffLocation: string;
    readonly noOfPassengers: string;
    readonly luggageCount: string;
    readonly childern: [ChildernDto];
    readonly handicapAccess: boolean;
}