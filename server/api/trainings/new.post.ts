import { Training } from '../../models/TrainingSchema'

export default defineEventHandler(async (event) => {
    const { data } = await readBody(event)
    
    const newTraining = new Training(data)
    
    await newTraining.save()
    
    return newTraining
    
})