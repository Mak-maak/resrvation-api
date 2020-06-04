import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema ({
    email: {type: String, required: true },
    password: {type: String, required: true },
    isActive: {type: Boolean, default: true }
});