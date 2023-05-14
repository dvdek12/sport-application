<template>
    <div class="bg-slate-400 m-5 w-full rounded-md shadow-xl">
        <div class="w-full h-full flex flex-col">
            <!-- Training Image -->
            <div>
                <img class="rounded-t-md" :src="training.image.url" :alt="training.image.alt" />
            </div>

            <!-- Training Body  -->
            <div class="h-full">
                <div class="flex bg-slate-500 py-3 px-6 items-center justify-between">

                    <h1 class="text-2xl font-semibold text-slate-900">
                        {{ training.name }}
                    </h1>


                    <div class="inline-flex items-center space-x-4">
                        <div class="inline-flex items-center space-x-1">
                            <font-awesome-icon class="text-gray-400 w-4 h-4" :icon="['fas', 'clock']" />
                            <span class="text-xl text-gray-400">
                                {{ training.length }}
                            </span>
                        </div>

                        <div class="inline-flex items-center space-x-1">
                            <font-awesome-icon class="text-red-400 w-4 h-4" :icon="['fas', 'fire']" />
                            <span class="text-xl text-red-400">
                                {{ training.caloriesBurn }}
                            </span>
                        </div>
                    </div>

                </div>

                <div class="p-5 bg-slate-400 rounded-b-md">
                    {{ shortDescription  }}
                </div>

                
            </div>

            <!-- Training footer  -->
            <div class="m-5">
                <NuxtLink :to="`/trainings/${training._id}`">
                    <button class="bg-blue-400 hover:bg-blue-600 transition-all duration-300 ease-in-out py-2 px-4 rounded-xl text-white text-xl">
                        Explore
                    </button>
                </NuxtLink>
            </div>
        </div>


    </div>
</template>

<script setup>

const description = computed(() => props.training.description)

const shortDescription = computed(() => {
    const description = props.training.description
    const descriptionArray = Array.from(description)
    const halfOfArray = Math.ceil(descriptionArray.length / 2)
    const cut = descriptionArray.slice(0, halfOfArray)

    const convertToString = (arr) => {
        var result = ""
        arr.forEach((letter) => result += letter)
        return result
    }

    var result = convertToString(cut) + " ..."

    return result
})

const props = defineProps({
    training: {
        type: Object,
        required: true
    }
})

</script>

