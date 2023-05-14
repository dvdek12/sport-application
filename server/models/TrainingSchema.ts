import { Schema, model } from 'mongoose'

const TrainingSchema = new Schema({
    id: String,
    name: {
        url: String,
        alt: String
    },
    favourite: Boolean,
    length: Number,
    objective: String,
    requirements: Array<String>,
    caloriesBurn: Number,
    description: String
})


export const Training = model<any>('Training', TrainingSchema);