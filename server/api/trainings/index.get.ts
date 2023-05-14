
import { Training } from '../../models/TrainingSchema'

export default defineEventHandler(async (event) => {
    
    const trainings = await Training.find()

    return {
        trainings
    }
})

// trainings: [
//     {
//         id: 1,
//         name: 'HIIT',
//         image: {
//             url: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//             alt: 'HIIT Training image'
//         },
//         favourite: false,
//         length: '2h',
//         objective: 'Upper Body',
//         requirements: ['barbells', 'rod'],
//         caloriesBurn: 350,
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type'
//     },

//     {
//         id: 2,
//         name: 'Legs & Nuts Cracker',
//         image: {
//             url: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//             alt: 'Legs Nuts Image photo'
//         },
//         favourite: true,
//         length: '1.5h',
//         objective: 'Legs',
//         requirements: ['barbells', 'rod'],
//         caloriesBurn: 350,
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ele'
//     },

//     {
//         id: 3,
//         name: 'Pull over these bitches',
//         image: {
//             url: 'https://images.pexels.com/photos/221247/pexels-photo-221247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//             alt: 'Pull over image photo'
//         },
//         favourite: false,
//         length: '1h',
//         objective: 'Upper Body',
//         requirements: ['barbells', 'rod'],
//         caloriesBurn: 350,
//         description: 'into ele'
//     },

//     {
//         id: 4,
//         name: 'Breakdance',
//         image: {
//             url: 'https://images.pexels.com/photos/159273/breakdancing-battle-life-males-159273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//             alt: 'Breakdance training photo'
//         },
//         favourite: true,
//         length: '2h',
//         objective: 'Full Body',
//         requirements: ['barbells', 'rod'],
//         caloriesBurn: 350,
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ele'
//     },

//     {
//         id: 5,
//         name: 'Breakdance',
//         image: {
//             url: 'https://images.pexels.com/photos/159273/breakdancing-battle-life-males-159273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//             alt: 'Breakdance training photo'
//         },
//         favourite: false,
//         length: '2h',
//         objective: 'Full Body',
//         requirements: ['barbells', 'rod'],
//         caloriesBurn: 350,
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ele'
//     },

//     {
//         id: 6,
//         name: 'Breakdance',
//         image: {
//             url: 'https://images.pexels.com/photos/159273/breakdancing-battle-life-males-159273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//             alt: 'Breakdance training photo'
//         },
//         favourite: false,
//         length: '2h',
//         objective: 'Full Body',
//         requirements: ['barbells', 'rod'],
//         caloriesBurn: 350,
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ele'
//     }
// ]