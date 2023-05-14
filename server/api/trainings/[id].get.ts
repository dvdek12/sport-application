import { Training } from '../../models/TrainingSchema'

export default defineEventHandler(async (event) => {
    const id = await event.context.params?.id
    
    const training = await Training.findById({ _id: id })
    
    return {
        training
    }
})