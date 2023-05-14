<template>

    <div class="w-screen bg-indigo-500">
        <nav class="flex justify-center items-center space-x-6 p-5">
            <NuxtLink to="/" class="text-white font-semibold">Home</NuxtLink>
            <NuxtLink to="/trainings" class="text-white font-semibold">Trainings</NuxtLink>
            <NuxtLink to="/" class="text-white font-semibold">Page 2</NuxtLink>
            <NuxtLink to="/" class="text-white font-semibold">Page 3</NuxtLink>

            <NuxtLink v-if="isTrainingPage"  to="/trainings/new" class="text-white font-semibold bg-blue-500 py-2 px-3 rounded-md"> Add New </NuxtLink>
            
        </nav>
    </div>

    <slot ></slot>
   
</template>

<script setup>

const isTrainingPage = useIsTrainingPage()

</script>