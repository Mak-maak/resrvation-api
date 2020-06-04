import * as mongoose from 'mongoose';

export const CarsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    modelNumber: { type: String, required: true },
    color: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: Date, default: Date.now }
});