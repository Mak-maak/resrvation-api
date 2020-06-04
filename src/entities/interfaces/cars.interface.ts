import { Document } from 'mongoose';

export interface Cars extends Document {
    readonly name: string;
    readonly modelNumber: string;
    readonly color: string;
    readonly image: string;
}