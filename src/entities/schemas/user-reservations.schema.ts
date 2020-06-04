import * as mongoose from 'mongoose';

export const UserReservationSchema = new mongoose.Schema({
    id: { type: String, required: true },
    email: { type: String, required: true },
    destination: { type: String, required: false }    
});