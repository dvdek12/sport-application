import { Training } from '../../models/TrainingSchema'

export default defineEventHandler(async (event) => {
    const { data } = await readBody(event)
    
    console.log("data from backedn-<>", data);

    const newTraining = new Training(data)
    console.log("newTraiuning", newTraining);
    
    await newTraining.save()
    
    return newTraining
    
})