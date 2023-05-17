<template>
    <form>
        <div class="flex items-center justify-center w-full">
            <label for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                        </path>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to
                            upload</span> your training photo
                    </p>
                </div>
                <input id="dropzone-file" type="file" @change="handleImageSelect($event)" class="hidden" />
            </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
            <input v-model="newTraining.name" type="text" name="floating_email" id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " required />
            <label for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Name of training</label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
            <input v-model="newTraining.length" type="number" name="repeat_password" id="floating_repeat_password"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " required />
            <label for="floating_repeat_password"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Training Length</label>
        </div>

        <div class="relative z-0 w-full mb-6 group">
            <input v-model="newTraining.objective" type="text" name="floating_first_name" id="floating_first_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " required />
            <label for="floating_first_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Objective
            </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
            <h2 class="text-sm text-gray-500 mb-3 dark:text-gray-400">
                Requirements:
            </h2>

            <div class="grid grid-cols-2 justify-items-center w-1/4 gap-6">
                <div class="flex flex-col space-y-1">

                    <img @click="handleRequirements($event, 'kettlebell')"
                        class="p-4 bg-gray-300 rounded-md border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-500 transition-all duration-300 ease-in-out hover:border-2"
                        src="~/assets/kettlebell.png" alt="Kettleball" />

                    <p class="text-xs text-gray-500 text-center">
                        Kettlebell
                    </p>
                </div>
                <div class="flex flex-col space-y-1">
                    <img @click="handleRequirements($event, 'jumping-rope')"
                        class="p-4 bg-gray-300 rounded-md border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-500 transition-all duration-300 ease-in-out hover:border-2"
                        src="~/assets/jumping-rope.png" alt="Kettleball" />
                    <p class="text-xs text-gray-500 text-center">
                        Jumping Rope
                    </p>
                </div>
                <div class="flex flex-col space-y-1">
                    <img @click="handleRequirements($event, 'barbell')"
                        class="p-4 bg-gray-300 rounded-md border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-400 transition-all duration-300 ease-in-out hover:border-2"
                        src="~/assets/barbell.png" alt="Kettleball" />
                    <p class="text-xs text-gray-500 text-center">
                        Barbell
                    </p>
                </div>
                <div class="flex flex-col space-y-1">
                    <img @click="handleRequirements($event, 'pullup-bar')"
                        class="p-4 bg-gray-300 rounded-md border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-500 transition-all duration-300 ease-in-out hover:border-2"
                        src="~/assets/pull-up.png" alt="Kettleball" />
                    <p class="text-xs text-gray-500 text-center">
                        Pull-up Bar
                    </p>
                </div>
            </div>
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <input v-model="newTraining.caloriesBurn" type="number" name="repeat_password" id="floating_repeat_password"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="floating_repeat_password"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Calories Burn</label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input v-model="newTraining.description" type="text" name="floating_company" id="floating_company"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="floating_company"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Description</label>
            </div>
        </div>

        <button @click="handleSubmit()" type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
        </button>
    </form>
</template>

<script setup>

const handleImageSelect = (event) => {
    console.log(event.target.files[0]);
}


const newTraining = reactive({
    name: '',
    image: {
        url: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: "Training image"
    },
    favourite: false,
    isPopular: false,
    length: 0,
    objective: '',
    requirements: [],
    caloriesBurn: 0,
    description: ''

})

async function handleSubmit() {
    await useFetch('/api/trainings/new', {
        method: 'POST',
        body: {
            data: newTraining
        },

        
    })
}



function handleRequirements(event, item) {
    var otherItems = event.target.offsetParent.children[1].children
    Array.from(otherItems).forEach((item) => {
        // console.log(item.children[0]);
        if (item.children[0].classList.contains('bg-green-400')) {
            item.classList.replace('bg-green-400', 'bg-gray-300')
        }
    })
    event.target.classList.replace('bg-gray-300', 'bg-green-400')


}


</script>