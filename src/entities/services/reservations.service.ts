import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Reservation } from './../interfaces/reservations.interface';
import { ReservationDto } from './../dtos/reservations.dto';
import { UserReservation } from './../interfaces/user-reservation.interface';
import { UserReservationDto } from './../dtos/user-reservation.dto';

@Injectable()
export class ReservationService {
    constructor(@Inject('RESERVATION_MODEL') private readonly reservationModel: Model<Reservation>,
                @Inject('USER_RESERVATION_MODEL') private readonly userReservationModel: Model<UserReservation>) { }

    async create(reservationDto: ReservationDto): Promise<any> {
        const createReservation = new this.reservationModel(reservationDto);
        const result = await createReservation.save();
        return { status: 201, response: "Created.", recordId: result.id, message: "Reservation created successfully." };        
    }

    async createUserReservation(userReservationDto: UserReservationDto) {
        const createUserReservation = new this.userReservationModel(userReservationDto);
        return await createUserReservation.save();
    }

    async findAll(): Promise<Reservation[]> {
        return await this.reservationModel.find().exec();
    }

    async find(id: string, email: string): Promise<Reservation> {
        const userResrvation = await this.userReservationModel.findOne({ id, email });
        if(userResrvation) {
            return this.reservationModel.findById(userResrvation.id);
        }
        
        return null;
    }

    async update(id: string, reservationDto: ReservationDto): Promise<Reservation> {
        return await this.reservationModel.findByIdAndUpdate(id, reservationDto);
    }

    async delete(id: string): Promise<Reservation> {
        return await this.reservationModel.findByIdAndRemove(id);
    }
}